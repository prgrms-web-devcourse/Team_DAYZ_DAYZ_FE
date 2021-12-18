import styled from '@emotion/styled';
import React from 'react';
import Input from '.';

interface OfficeHourInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startTime?: number | string;
  endTime?: number | string;
}

const OfficeHourInput = ({ startTime, endTime, ...props }: OfficeHourInputProps) => {
  return (
    <InputContainer>
      <InfoInput {...props} type="time" value={startTime} />
      <Dash>~</Dash>
      <InfoInput {...props} type="time" value={endTime} />
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
