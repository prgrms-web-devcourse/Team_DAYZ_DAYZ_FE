import React from 'react';
import { Route, Switch } from 'react-router';
import { ChangeLocation, ExplorePage, HomePage } from '../pages';
import Pottery from '../pages/Category/Pottery';
import LoginForm from '../pages/Login/LoginForm';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/explore" exact component={ExplorePage} />
      <Route path="/location" exact component={ChangeLocation} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/category/pottery" exact component={Pottery} />
    </Switch>
  );
};

export default Router;
