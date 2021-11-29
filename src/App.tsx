import React from 'react';
import Router from './routes/Router';
import DefaultTemplate from './template/DefaultTemplate';

function App() {
  return (
    <DefaultTemplate>
      <Router></Router>
    </DefaultTemplate>
  );
}

export default App;
