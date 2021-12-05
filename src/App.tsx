import React from 'react';
import Router from './routes/Router';
import DefaultTemplate from './template/DefaultTemplate';
import { Global, ThemeProvider } from '@emotion/react';
import { reset, theme } from './style';

function App() {
  return (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={theme}>
        <DefaultTemplate>
          <Router />
        </DefaultTemplate>
      </ThemeProvider>
    </>
  );
}
export default App;
