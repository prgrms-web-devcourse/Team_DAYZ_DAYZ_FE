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
      <PrivateRoute exact path="/">
        <HomePage />
      </PrivateRoute>
      <PrivateRoute exact path="/category/:genre">
        <CategoryPage />
      </PrivateRoute>
      <PrivateRoute exact path="/feed">
        <FeedPage />
      </PrivateRoute>
      <PrivateRoute exact path="/search">
        <SearchPage />
      </PrivateRoute>
      <PrivateRoute path="/workshop/:id">
        <WorkshopPage />
      </PrivateRoute>
      <PrivateRoute exact path="/products/:id">
        <ProductsDetailPage />
      </PrivateRoute>
      <PrivateRoute exact path="/booking/success">
        <SuccessBookPage />
      </PrivateRoute>
      <PrivateRoute exact path="/booking/:id">
        <BookingPage />
      </PrivateRoute>
      <PrivateRoute exact path="/user/book">
        <UserBookedPage />
      </PrivateRoute>
      <PrivateRoute exact path="/user/review">
        <UserReviewPage />
      </PrivateRoute>
      <PrivateRoute exact path="/user/following">
        <UserFollowingPage />
      </PrivateRoute>
      <PrivateRoute exact path="/user/edit">
        <UserProfileEditPage />
      </PrivateRoute>
      <PrivateRoute exact path="/user/:id">
        <UserPage />
      </PrivateRoute>
      <PrivateRoute exact path="/feed/comments/:id">
        <CommentsPage />
      </PrivateRoute>
      <PrivateRoute exact path="/search/:results">
        <SearchResultsPage />
      </PrivateRoute>
      <PrivateRoute exact path="/upload/feed">
        <UploadFeedPage />
      </PrivateRoute>
      <PrivateRoute exact path="/upload/comments/:id">
        <UploadCommentPage />
      </PrivateRoute>
      <PrivateRoute exact path="/upload/products">
        <UploadProductPage />
      </PrivateRoute>
      <Route path="/login" component={LoginPage} />
      <Route path="/redirect-after-kakao" component={RedirectPageAfterKakao} />
      <Route path="/signup/author-info" component={SignupAuthorInfo} />
      <Route path="/signup/check-location" component={SignupCheckLocation} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
