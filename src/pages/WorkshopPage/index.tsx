import React from 'react';
import styled from '@emotion/styled';
import { Settings, Layout, Calendar, Star } from 'react-feather';
import { Link, Switch, Route } from 'react-router-dom';
import FeedList from './FeedList';
import ProductsList from './ProductsList';
import ReviewList from './ReviewList';
const AuthorPage = () => {
  const ICON_SIZE = 32;
  const showFeed = () => {
    const path = window.location.pathname;
    if (path === '/workshop') {
      return true;
    }
  };
  return (
    <WorkshopContainer>
      <WorkshopProfile>
        <img className="profileImg" src="https://picsum.photos/id/1/200/300" alt="test" />
        <div className="info">
          <span>방탄공방</span>
          <span>서울 강남구 테헤란로</span>
          <span>12-7 3층</span>
          <span>010-1234-5678</span>
          <span>09:00 - 17:00</span>
        </div>
        <Settings />
      </WorkshopProfile>
      <Tabs>
        <Link to="/workshop">
          <Layout size={`${ICON_SIZE}px`} />
        </Link>
        <Link to="/workshop/productsList">
          <Calendar size={`${ICON_SIZE}px`} />
        </Link>
        <Link to="/workshop/reviewList">
          <Star size={`${ICON_SIZE}px`} />
        </Link>
      </Tabs>
      {showFeed() ? <FeedList /> : null}

      <Switch>
        <Route path="/workshop/productsList">
          <ProductsList />
        </Route>
        <Route path="/workshop/reviewList">
          <ReviewList />
        </Route>
      </Switch>
    </WorkshopContainer>
  );
};
export default AuthorPage;

const WorkshopContainer = styled.div`
  margin-top: 36px;
`;

const WorkshopProfile = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  & .profileImg {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  & .info {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin: 0 36px;
    & span:first-child {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 12px;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #eed6fc;
  padding: 12px 0;
`;

const Tab = styled.span`
  font-size: 24px;
`;
