import styled from '@emotion/styled';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../../atoms';
import { fetchLocationList } from '../../../utils/api/dayzApi';

const LocationSetting = () => {
  const [pickState, setPickState] = useState<string | ''>('');
  const [district, setDistrict] = useState<any | ''>([]);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    async function getLocation() {
      return await fetchLocationList(`${userInfo.token}`).then((response) =>
        setDistrict([...response.data.data.addresses[0].regions]),
      );
    }
    getLocation();
    setPickState(userInfo.regionName);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: any = (e.target as HTMLInputElement).dataset.id!;
    setPickState(target);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [{ regionId, regionName }] = district.filter(
      (list: any) => list.regionName === pickState,
    );
    // await setLocation({
    //   token: `${userInfo.token}`,
    //   cityId: 1,
    //   regionId,
    // }).then((response) => console.log(response));
    // setUserInfo((oldState) => ({
    //   ...oldState,
    //   regionId,
    //   regionName,
    // }));
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
          <SelectedButton>{pickState}</SelectedButton>
          <SubmitButton type="submit">저장</SubmitButton>
        </div>

        {district?.map((location: any, index: number) => (
          <ToggleContainer key={index}>
            <Input
              type="checkbox"
              data-id={location.regionName}
              checked={pickState?.includes(location.regionName)}
              onChange={handleChange}
            />
            <Button>{location.regionName}</Button>
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
