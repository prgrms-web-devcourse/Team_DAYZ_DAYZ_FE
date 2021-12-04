import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  WorkshopPage,
  CategoryPage,
  FeedPage,
  LoginPage,
  HomePage,
  ProductsDetailPage,
  BookingPage,
  SearchPage,
  UserPage,
  NotFoundPage,
  Comments,
  SearchResultsPage,
  UploadFeedPage,
  UserBookedPage,
} from '../pages';
import { UserReviewPage } from '../pages/UserPage';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/loginHome" exact component={LoginPage} />
      <Route path="/category/:genre" exact component={CategoryPage} />
      <Route path="/feed" exact component={FeedPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/products/:id" exact component={ProductsDetailPage} />
      <Route path="/booking/:id" exact component={BookingPage} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/user/book" exact component={UserBookedPage} />
      <Route path="/user/review" exact component={UserReviewPage} />
      <Route path="/feed/comments/:id" exact component={Comments} />
      <Route path="/search/results" exact component={SearchResultsPage} />
      <Route path="/workshop" component={WorkshopPage} />
      <Route path="/upload" exact component={UploadFeedPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
