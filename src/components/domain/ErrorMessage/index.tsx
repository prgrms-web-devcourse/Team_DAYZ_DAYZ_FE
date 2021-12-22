import React, { CSSProperties, ReactChild } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: ReactChild;
  style?: CSSProperties;
}

const ErrorMessage = ({ children, ...props }: Props) => {
  return <StyledContent style={{ ...props.style }}>{children}</StyledContent>;
};

const StyledContent = styled.div`
  margin-bottom: 10px;
  color: #c24848;
  font-weight: bold;
`;

export default ErrorMessage;
