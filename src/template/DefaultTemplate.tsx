import styled from '@emotion/styled';
import React from 'react';
import { Header } from './Header';
import { Navigator } from './Navigator';

interface Props {
  children: React.ReactNode;
}

const isLoginPage = () => {
  const path = window.location.pathname;
  if (path === '/loginHome' || path === '/signupHome') {
    return true;
  }
};

const DefaultTemplate = ({ children }: Props): JSX.Element => {
  return (
    <>
      {isLoginPage() ? (
        <Container>{children}</Container>
      ) : (
        <Container>
          <Header />
          <StyledMain>{children}</StyledMain>
          <Navigator />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
`;
const StyledMain = styled.main`
  flex: 1;
`;

export default DefaultTemplate;
