import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

interface InputProps {
  style?: CSSProperties;
  type: 'text' | 'number';
}

const Input = ({ type, ...props }: InputProps) => {
  return <InputStyled type={type} style={{ ...props.style }} {...props} />;
};
export default Input;

const InputStyled = styled.input`
  background: none;
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s;
  &:hover {
    border: solid 1px black;
  }
`;
