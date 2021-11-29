import React from 'react';
import { Route, Switch } from 'react-router';
import { ExplorePage, HomePage } from '../pages';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/explore" exact component={ExplorePage} />
    </Switch>
  );
};

export default Router;
