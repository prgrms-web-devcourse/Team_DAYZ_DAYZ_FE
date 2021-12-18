import styled from '@emotion/styled';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  onclick?: any;
}

const Button = ({ children, type, onClick, ...props }: Props) => {
  return (
    <StyledButton type={type} style={{ ...props.style }} onClick={onClick} {...props}>
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
