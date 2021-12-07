import styled from '@emotion/styled';
import React, { useState } from 'react';

const LocationSetting = () => {
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
    <>
      <H4>관심지역 3곳을 선택해 주세요</H4>
      <Form>
        {district.map((location) => (
          <Button data-id={location} key={location}>
            {location}
          </Button>
        ))}
      </Form>
    </>
  );
};

const Form = styled.form``;

// const Input = styled.input`
//   display: none;
//   &:checked + div {
//     background: lightgreen;
//   }
// `;
const H4 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin-top: 40px;
`;
const Button = styled.div`
  font-size: 20px;
  color: #c4c4c4;
  border: solid 1px #c4c4c4;
  border-radius: 20px;
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
`;
export default LocationSetting;
