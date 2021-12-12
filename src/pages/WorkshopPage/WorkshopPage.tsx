import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import WorkshopHeader from './WorkshopHeader';
import { SettingPage, ReviewListPage, FeedListPage, ProductsListPage, EditPage } from '.';
import { RoutePath } from '.';

const WorkshopPage = () => {
  return (
    <WorkshopContainer>
      <Switch>
        <Route path={RoutePath.ProductList(':id')}>
          <WorkshopHeader />
          <ProductsListPage />
        </Route>
        <Route path={RoutePath.ReviewList(':id')}>
          <WorkshopHeader />
          <ReviewListPage />
        </Route>
        <Route path={RoutePath.Setting('id')}>
          <SettingPage />
        </Route>
        <Route path={RoutePath.Edit(':id')}>
          <EditPage />
        </Route>
        <Route path={RoutePath.Workshop(':id')}>
          <WorkshopHeader />
          <FeedListPage />
        </Route>
      </Switch>
    </WorkshopContainer>
  );
};
export default WorkshopPage;

const WorkshopContainer = styled.div`
  margin-top: 25px;
`;
