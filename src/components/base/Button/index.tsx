import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

interface Props {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
}

const Button = ({ children, type, ...props }: Props) => {
  return (
    <StyledButton type={type} style={{ ...props.style }} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: linear-gradient(270deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border: none;
  cursor: pointer;
`;

export default Button;
