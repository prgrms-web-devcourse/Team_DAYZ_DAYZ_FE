import React, { CSSProperties, useState } from 'react';
import styled from '@emotion/styled';

interface InputProps {
  style?: CSSProperties;
  type: 'text' | 'number' | 'date' | 'time';
  value?: string | number;
}

const Input = ({ type, value, ...props }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <InputStyled
      type={type}
      style={{ ...props.style }}
      value={inputValue}
      onChange={onChange}
      {...props}
    />
  );
};
export default Input;

const InputStyled = styled.input`
  background: none;
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:hover {
    border: solid 1px black;
  }
`;
