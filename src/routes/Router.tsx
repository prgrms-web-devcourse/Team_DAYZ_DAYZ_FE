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
      <PrivateRoute path="/category/:genre" exact>
        <CategoryPage />
      </PrivateRoute>
      <PrivateRoute path="/feed" exact>
        <FeedPage />
      </PrivateRoute>
      <PrivateRoute path="/search" exact>
        <SearchPage />
      </PrivateRoute>
      <PrivateRoute path="/workshop/:id">
        <WorkshopPage />
      </PrivateRoute>
      <PrivateRoute path="/products/:id" exact>
        <ProductsDetailPage />
      </PrivateRoute>
      <PrivateRoute path="/booking/success" exact>
        <SuccessBookPage />
      </PrivateRoute>
      <PrivateRoute path="/booking/:id" exact>
        <BookingPage />
      </PrivateRoute>
      <PrivateRoute path="/user/book" exact>
        <UserBookedPage />
      </PrivateRoute>
      <PrivateRoute path="/user/review" exact>
        <UserReviewPage />
      </PrivateRoute>
      <PrivateRoute path="/user/following" exact>
        <UserFollowingPage />
      </PrivateRoute>
      <PrivateRoute path="/user/edit" exact>
        <UserProfileEditPage />
      </PrivateRoute>
      <PrivateRoute path="/user/:id" exact>
        <UserPage />
      </PrivateRoute>
      <PrivateRoute path="/feed/comments/:id" exact>
        <CommentsPage />
      </PrivateRoute>
      <PrivateRoute path="/search/:results" exact>
        <SearchResultsPage />
      </PrivateRoute>
      <PrivateRoute path="/upload/feed" exact>
        <UploadFeedPage />
      </PrivateRoute>
      <PrivateRoute path="/upload/comments/:id" exact>
        <UploadCommentPage />
      </PrivateRoute>
      <PrivateRoute path="/upload/products" exact>
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
