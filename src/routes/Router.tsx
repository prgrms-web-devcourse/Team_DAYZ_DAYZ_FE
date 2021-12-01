import React from 'react';
import { Route, Switch } from 'react-router';
import LoginHome from '../pages/LoginPage/LoginHome';
import MainPage from '../pages/MainPage/MainPage';
import Pottery from '../pages/CategoryPage/Pottery';
import FeedPage from '../pages/FeedPage/FeedPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ProductsDetailPage from '../pages/ProductsDetailPage';
import ReservationPage from '../pages/ReservationPage/ReservationPage';
import UserPage from '../pages/UserPage/UserPage';
import AuthorPage from '../pages/AuthorPage/AuthorPage';

const Router = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginHome} />
      <Route path="/" exact component={MainPage} />
      <Route path="/category/pottery" exact component={Pottery} />
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
