import React, { Suspense } from 'react';
import Router from './routes/Router';
import DefaultTemplate from './template/DefaultTemplate';
import { Global, ThemeProvider } from '@emotion/react';
import { reset, theme } from './style';

function App() {
  return (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading...</div>}>
          <DefaultTemplate>
            <Router />
          </DefaultTemplate>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
export default App;
