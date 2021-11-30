import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'react-feather';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>
        <Link to="/explore" style={{ textDecoration: 'none' }}>
          <SearchBarWrapper>
            <PlaceHolder>공방이름,지역,클래스명으로 검색</PlaceHolder>
          </SearchBarWrapper>
        </Link>
        <CategoryWrapper>
          {/* 1번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 2번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 3번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 4번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 5번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 6번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 7번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 8번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
        </CategoryWrapper>
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

const SearchBarWrapper = styled.section`
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

const CategoryWrapper = styled.section`
  width: 300px;
  margin: 50px calc(50% - 150px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
`;
const CategoryItem = styled.div`
  color: black;
  padding: 5px;
`;
export default HomePage;
