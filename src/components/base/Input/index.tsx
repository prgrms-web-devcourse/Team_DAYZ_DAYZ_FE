import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import React from 'react';

interface InputProps {
  style?: CSSProperties;
}

const Input = ({ ...props }: InputProps) => {
  return <InputStyled type="text" style={{ ...props.style }} {...props} />;
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
