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
  UserFollowingPage,
  LeaveCommentPage,
} from '../pages';
import UploadProductPage from '../pages/UploadProductPage';

import { UserReviewPage } from '../pages/UserPage';

import { UserProfileEditPage } from '../pages/UserPage';

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
      <Route path="/user/following" exact component={UserFollowingPage} />
      <Route path="/user/edit" exact component={UserProfileEditPage} />
      <Route path="/feed/comments/:id" exact component={Comments} />
      <Route path="/search/results" exact component={SearchResultsPage} />
      <Route path="/workshop" component={WorkshopPage} />
      <Route path="/upload" exact component={UploadFeedPage} />
      <Route path="/upload/comments/:id" exact component={LeaveCommentPage} />
      <Route path="/upload/products" exact component={UploadProductPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
