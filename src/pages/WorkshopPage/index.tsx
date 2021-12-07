import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import ProductsList from './ProductsList';
import ReviewList from './ReviewList';
import Setting from './Setting';
import WorkshopHeader from './WorkshopHeader';
import FeedList from './FeedList';
const AuthorPage = () => {
  const canShowHeader = () => {
    const path = window.location.pathname;
    return (
      path === '/workshop' || path === '/workshop/productsList' || path === '/workshop/reviewList'
    );
  };
  const isFeed = () => {
    const path = window.location.pathname;
    return path === '/workshop';
  };
  return (
    <WorkshopContainer>
      {canShowHeader() && <WorkshopHeader />}
      {isFeed() && <FeedList />}
      <Switch>
        <Route path="/workshop/productsList">
          <ProductsList />
        </Route>
        <Route path="/workshop/reviewList">
          <ReviewList />
        </Route>
        <Route path="/workshop/setting">
          <Setting />
        </Route>
      </Switch>
    </WorkshopContainer>
  );
};
export default AuthorPage;

const WorkshopContainer = styled.div`
  margin-top: 36px;
`;
