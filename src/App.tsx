import React from 'react';
import Router from './routes/Router';
import DefaultTemplate from './template/DefaultTemplate';
import { Global } from '@emotion/react';
import reset from './reset';

function App() {
  return (
    <>
      <Global styles={reset} />
      <DefaultTemplate>
        <Router />
      </DefaultTemplate>
    </>
  );
}

export default App;
