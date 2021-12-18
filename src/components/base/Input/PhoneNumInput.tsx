import styled from '@emotion/styled';
import React from 'react';
import Input from '.';

interface PhoneNumInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  frontValue?: number | string;
  secondValue?: number | string;
}

const PhoneNumInput = ({ frontValue, secondValue, ...props }: PhoneNumInputProps) => {
  return (
    <InputContainer>
      <select name="phoneNumberType" id="phoneNumberType">
        <option value="010">010</option>
        <option value="02">02</option>
      </select>
      <InfoInput {...props} type="number" value={frontValue} />
      <Dash>-</Dash>
      <InfoInput {...props} type="number" value={secondValue} />
    </InputContainer>
  );
};
export default PhoneNumInput;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  & select {
    border-radius: 8px;
    margin-right: 10px;
  }
`;

const InfoInput = styled(Input)`
  width: 100%;
`;

const Dash = styled.div`
  font-size: 30px;
  margin: 0 10px;
`;
