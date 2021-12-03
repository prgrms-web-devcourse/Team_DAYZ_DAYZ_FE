import React from 'react';
import styled from '@emotion/styled';
import { Header } from './Header';
import { Navigator } from './Navigator';

interface Props {
  children: React.ReactNode;
}

const isLoginPage = () => {
  const path = window.location.pathname;
  if (path === '/loginHome' || path === '/signupAuthorInfo' || path === '/signupCheckLocation') {
    return true;
  }
};

const isCommentsPage = () => {
  const path = window.location.pathname;
  if (path === '/feed/comments/:id') {
    return true;
  }
};

const DefaultTemplate = ({ children }: Props): JSX.Element => {
  return (
    <>
      {isLoginPage() || isCommentsPage() ? (
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
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  margin: auto;
`;
const StyledMain = styled.main`
  flex: 1;
`;

export default DefaultTemplate;
