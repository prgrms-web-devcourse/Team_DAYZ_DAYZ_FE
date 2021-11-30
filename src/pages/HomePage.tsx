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
        <BestClassesWrapper>
          <Title>금주의 인기 클래스</Title>
          <BestClassItemWrapper>
            <BestClassesItem>
              <BestClassesImg />
              <BestClassesTitle>1시간으로 크리스마스 트리 완성하기</BestClassesTitle>
            </BestClassesItem>
            <BestClassesItem>
              <BestClassesImg />
              <BestClassesTitle>1시간으로 크리스마스 트리 완성하기</BestClassesTitle>
            </BestClassesItem>
            <BestClassesItem>
              <BestClassesImg />
              <BestClassesTitle>1시간으로 크리스마스 트리 완성하기</BestClassesTitle>
            </BestClassesItem>
          </BestClassItemWrapper>
        </BestClassesWrapper>

        <NewClassesWrapper>
          <Title>신규 공방</Title>
        </NewClassesWrapper>
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
const Title = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  margin-bottom: 10px;
`;
const BestClassesWrapper = styled.section`
  width: ;
`;
const BestClassItemWrapper = styled.div`
  width: 100vw;
  overflow: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const BestClassesItem = styled.div`
  position: relative;
`;
const BestClassesImg = styled.div`
  margin: 0px 20px;
  width: 340px;
  height: 120px;
  border-radius: 16px;
  background-color: grey;
`;
const BestClassesTitle = styled.div`
  color: #f5f5f5;
  font-weight: 600;
  position: absolute;
  bottom: 15px;
  left: calc(50% - 170px + 20px);
  font-size: 20px;
`;

const NewClassesWrapper = styled.section``;

const NewClassesItemWrapper = styled.div``;
const NewClassesItem = styled.div``;
const NewClassesImg = styled.div``;
const NewClassesTitle = styled.div``;
export default HomePage;
