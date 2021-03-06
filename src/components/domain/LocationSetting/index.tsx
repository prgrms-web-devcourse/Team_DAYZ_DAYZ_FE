import styled from '@emotion/styled';
import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { ErrorMessage } from '..';
import { locationState, userState } from '../../../atoms';
import { LocationType } from '../../../types';
import { setLocation } from '../../../utils/api/dayzApi';
import { Toast } from '../../base';

// locationList = [
//   {
//     regionId: 1,
//     regionName: '강남구',
//   },
//   {
//     regionId: 2,
//     regionName: '강동구',
//   },
//   {
//     regionId: 3,
//     regionName: '강북구',
//   } 등등의 데이터를 recoil 에서 불러옵니다.
// ];
interface Props {
  setVisible: (T: boolean) => void;
}

const LocationSetting = ({ setVisible }: Props) => {
  const history = useHistory();
  const [pickState, setPickState] = useState<string | ''>('');
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [errorMessage, setErrorMessage] = useState('');
  const { state, contents } = useRecoilValueLoadable(locationState);
  const locationList: LocationType[] = useMemo(() => {
    if (state === 'hasValue') {
      return contents;
    } else if (state === 'hasError') {
      setErrorMessage('지역정보를 불러오지 못했습니다.');
      return [];
    }
  }, [state, contents]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: any = (e.target as HTMLInputElement).dataset.id!;
    setPickState(target);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [{ regionId, regionName }] = locationList.filter(
      (list: LocationType) => list.regionName === pickState,
    );
    try {
      await setLocation(userInfo.token, {
        cityId: 1,
        regionId,
      });
      setUserInfo((oldState) => ({
        ...oldState,
        regionId,
        regionName,
      }));
      setVisible(false);
      history.push('/');
      Toast.show('성공적으로 변경되었습니다.', 2000);
    } catch (e: any) {
      Toast.show(e.message);
    }
  };

  return (
    <Wrapper>
      <H4>관심지역을 선택해 주세요</H4>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            margin: '10px auto',
            paddingBottom: '20px',
            borderBottom: 'solid 1px #c4c4c4',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SelectedButton>{pickState ? pickState : userInfo.regionName}</SelectedButton>
          <SubmitButton type="submit">저장</SubmitButton>
        </div>
        <div />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {locationList?.map(({ regionId, regionName }: LocationType) => (
          <ToggleContainer key={regionId}>
            <Input
              type="checkbox"
              data-id={regionName}
              checked={pickState?.includes(regionName)}
              onChange={handleChange}
            />
            <Button>{regionName}</Button>
          </ToggleContainer>
        ))}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20px;
`;
const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const Input = styled.input`
  display: none;
  &:checked + div {
    background: #c4c4c4;
    color: #f5f5f5;
    border: none;
  }
`;
const H4 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
const Button = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #c4c4c4;
  border: solid 1px #c4c4c4;
  border-radius: 20px;
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  margin: 5px;
`;
const SelectedButton = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #f5f5f5;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border-radius: 20px;
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  margin: 5px;
`;
const SubmitButton = styled.button`
  background: transparent;
  border: solid 2px black;
  color: black;
  border-radius: 4px;
  font-weight: 600;
`;
export default LocationSetting;
