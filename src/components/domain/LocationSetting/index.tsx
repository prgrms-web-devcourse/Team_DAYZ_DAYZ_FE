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
    <Form>
      {district.map((location) => (
        <div key={location}>
          <Input data-id={location} />
          <Button>{location}</Button>
        </div>
      ))}
    </Form>
  );
};

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Input = styled.input`
  display: none;
  &:checked + div {
    background: lightgreen;
  }
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
