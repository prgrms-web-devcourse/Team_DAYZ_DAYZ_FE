import React from 'react';
import { Route, Switch } from 'react-router';

import {
  AuthorPage,
  CategoryPage,
  FeedPage,
  LoginPage,
  MainPage,
  ProductsDetailPage,
  ReservationPage,
  SearchPage,
  UserPage,
} from '../pages';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/category/:genre" exact component={CategoryPage} />
      <Route path="/feed" exact component={FeedPage} />
      <Route path="/Search" exact component={SearchPage} />
      <Route path="/Products/:id" exact component={ProductsDetailPage} />
      <Route path="/reservation" exact component={ReservationPage} />
      <Route path="/User" exact component={UserPage} />
      <Route path="/Author" exact component={AuthorPage} />
    </Switch>
  );
};

export default Router;
