import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import WorkshopHeader from './WorkshopHeader';
import { SettingPage, ReviewListPage, FeedListPage, ProductsListPage, EditPage } from '.';
import { WORKSHOP, PRODUCTSLIST, REVIEWLIST, SETTING, EDIT } from '.';

const WorkshopPage = () => {
  const canShowHeader = () => {
    const path = window.location.pathname;
    return path === `${WORKSHOP}` || path === `${PRODUCTSLIST}` || path === `${REVIEWLIST}`;
  };
  const isFeed = () => {
    const path = window.location.pathname;
    return path === `${WORKSHOP}`;
  };
  return (
    <WorkshopContainer>
      {canShowHeader() && <WorkshopHeader />}
      {isFeed() && <FeedListPage />}
      <Switch>
        <Route path={PRODUCTSLIST}>
          <ProductsListPage />
        </Route>
        <Route path={REVIEWLIST}>
          <ReviewListPage />
        </Route>
        <Route path={SETTING}>
          <SettingPage />
        </Route>
        <Route path={EDIT}>
          <EditPage />
        </Route>
      </Switch>
    </WorkshopContainer>
  );
};
export default WorkshopPage;

const WorkshopContainer = styled.div`
  margin-top: 36px;
`;
