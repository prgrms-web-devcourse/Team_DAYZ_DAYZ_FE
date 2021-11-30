import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>
        <Link to="/explore" style={{ textDecoration: 'none' }}>
          <SearchBar>
            <PlaceHolder>공방이름,지역,클래스명으로 검색</PlaceHolder>
          </SearchBar>
        </Link>
      </Container>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  overflow: scroll;
  width: 100vw;
  height: calc(100vh - 190px);
`;

const Container = styled.div`
  width: 100%;
  height: 1000px;
`;

const SearchBar = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 16px;
  margin: 50px calc(50% - 150px);
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceHolder = styled.div`
  width: 290px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
  background-color: white;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
`;

export default HomePage;
