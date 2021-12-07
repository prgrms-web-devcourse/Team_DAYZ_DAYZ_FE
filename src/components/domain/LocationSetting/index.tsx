import styled from '@emotion/styled';
import React, { useState } from 'react';

const LocationSetting = () => {
  const [pickState, setPickState] = useState<any | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target = (e.target as HTMLFormElement).dataset.id;
    if (!pickState?.includes(target)) {
      if (pickState.length < 3) {
        setPickState([...pickState, target]);
      } else {
        pickState.shift();
        setPickState([...pickState, target]);
      }
    } else {
      setPickState(pickState.filter((pick: any) => pick !== target));
    }
  };
  const district = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];
  return (
    <Wrapper>
      <H4>관심지역 3곳을 선택해 주세요</H4>
      <div
        style={{
          margin: '10px auto',
          paddingBottom: '20px',
          borderBottom: 'solid 1px #c4c4c4',
          left: '0',
          right: '0',
        }}
      >
        {pickState.length
          ? pickState.map((pick: any) => <SelectedButton key={pick}>{pick}</SelectedButton>)
          : ''}
      </div>
      <form onChange={handleChange}>
        {district.map((location) => (
          <ToggleContainer key={location}>
            <Input type="checkbox" data-id={location} checked={pickState?.includes(location)} />
            <Button>{location}</Button>
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
    background: #b88bd6;
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
export default LocationSetting;
