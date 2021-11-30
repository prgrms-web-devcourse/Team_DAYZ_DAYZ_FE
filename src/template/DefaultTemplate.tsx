import styled from '@emotion/styled';
import React from 'react';
import { Header } from './Header';
import { Navigator } from './Navigator';

interface Props {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: Props): JSX.Element => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Navigator />
    </main>
  );
};

export default DefaultTemplate;
