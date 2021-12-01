import React from 'react';
import { Route, Switch } from 'react-router';
import { ChangeLocation, ExplorePage, HomePage } from '../pages';
import LoginHome from '../pages/Login/LoginHome';
import SignupHome from '../pages/Login/SignupHome';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/explore" exact component={ExplorePage} />
      <Route path="/location" exact component={ChangeLocation} />
      <Route path="/loginHome" exact component={LoginHome} />
      <Route path="/signupHome" exact component={SignupHome} />
    </Switch>
  );
};

export default Router;
