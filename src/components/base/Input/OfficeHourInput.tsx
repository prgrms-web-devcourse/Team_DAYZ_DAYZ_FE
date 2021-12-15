import styled from '@emotion/styled';
import React from 'react';
import Input from '.';

interface OfficeHourInputProps {
  startTime?: number | string;
  endTime?: number | string;
}

const OfficeHourInput = ({ startTime, endTime }: OfficeHourInputProps) => {
  return (
    <InputContainer>
      <InfoInput type="time" value={startTime} />
      <Dash>~</Dash>
      <InfoInput type="time" value={endTime} />
    </InputContainer>
  );
};
export default OfficeHourInput;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoInput = styled(Input)`
  width: 100%;
`;

const Dash = styled.div`
  font-size: 30px;
  margin: 0 10px;
`;
