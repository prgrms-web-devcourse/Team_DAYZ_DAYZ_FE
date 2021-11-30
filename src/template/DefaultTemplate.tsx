import React from 'react';
import { Header } from './Header';
import { Navigator } from './Navigator';

interface Props {
  children: React.ReactNode;
}

const isLoginPage = () => {
  if (window.location.pathname === '/login') {
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
