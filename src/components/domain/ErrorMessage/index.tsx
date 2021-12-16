import React, { ReactChild } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: ReactChild;
}

const ErrorMessage = ({ children }: Props) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  margin-bottom: 10px;
  color: #c24848;
`;

export default ErrorMessage;
