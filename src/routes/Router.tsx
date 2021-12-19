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
  SuccessBookPage,
  SearchPage,
  UserPage,
  NotFoundPage,
  CommentsPage,
  SearchResultsPage,
  UploadFeedPage,
  UserBookedPage,
  UserFollowingPage,
  UploadCommentPage,
  UploadProductPage,
  UserReviewPage,
  UserProfileEditPage,
  RedirectPageAfterKakao,
  SignupAuthorInfo,
  SignupCheckLocation,
} from '../pages';
import { PrivateRoute } from './CustomRoutes';

const Router = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={HomePage} />
      <PrivateRoute path="/category/:genre" exact component={CategoryPage} />
      <PrivateRoute path="/feed" exact component={FeedPage} />
      <PrivateRoute path="/search" exact component={SearchPage} />
      <PrivateRoute path="/workshop/:id" exact component={WorkshopPage} />
      <PrivateRoute path="/products/:id" exact component={ProductsDetailPage} />
      <PrivateRoute path="/booking/success" exact component={SuccessBookPage} />
      <PrivateRoute path="/booking/:id" exact component={BookingPage} />
      <PrivateRoute path="/user/book" exact component={UserBookedPage} />
      <PrivateRoute path="/user/review" exact component={UserReviewPage} />
      <PrivateRoute path="/user/following" exact component={UserFollowingPage} />
      <PrivateRoute path="/user/edit" exact component={UserProfileEditPage} />
      <PrivateRoute path="/user/:id" exact component={UserPage} />
      <PrivateRoute path="/feed/comments/:id" exact component={CommentsPage} />
      <PrivateRoute path="/search/:results" exact component={SearchResultsPage} />
      <PrivateRoute path="/upload/feed" exact component={UploadFeedPage} />
      <PrivateRoute path="/upload/comments/:id" exact component={UploadCommentPage} />
      <PrivateRoute path="/upload/products" exact component={UploadProductPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/redirect-after-kakao" component={RedirectPageAfterKakao} />
      <Route path="/signup/author-info" component={SignupAuthorInfo} />
      <Route path="/signup/check-location" component={SignupCheckLocation} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
