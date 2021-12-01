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
        <div>{children}</div>
      ) : (
        <main>
          <Header />
          <div>{children}</div>
          <Navigator />
        </main>
      )}
    </>
  );
};

export default DefaultTemplate;
