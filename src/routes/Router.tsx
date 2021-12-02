import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AuthorPage,
  CategoryPage,
  FeedPage,
  LoginPage,
  HomePage,
  ProductsDetailPage,
  ReservationPage,
  SearchPage,
  UserPage,
  NotFoundPage,
  Comments,
  SearchResultsPage,
} from '../pages';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/category/:genre" exact component={CategoryPage} />
      <Route path="/feed" exact component={FeedPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/products/:id" exact component={ProductsDetailPage} />
      <Route path="/reservation" exact component={ReservationPage} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/author" exact component={AuthorPage} />
      <Route path="/feed/comments/:id" exact component={Comments} />
      <Route path="/search/results" exact component={SearchResultsPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
