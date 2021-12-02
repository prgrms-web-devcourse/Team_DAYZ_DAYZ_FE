import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsPage = () => {
  return (
    <SearchResultsWrapper>
      <SearchBarWrapper>
        <SearchBar placeholder={'클래스명, 지역으로 검색하기'} autoFocus />
      </SearchBarWrapper>
      <ResultsLength>10개의 검색 결과</ResultsLength>
      <ResultsCategory>
        <ResultsCategoryTitle>공방 검색 결과</ResultsCategoryTitle>
        <WorkShopResultsWrapper>
          <WorkShopResultsAvatar>
            <AvatarImg />
            <AvatarName>희진공방</AvatarName>
          </WorkShopResultsAvatar>
        </WorkShopResultsWrapper>
      </ResultsCategory>
      <ResultsCategory>
        <ResultsCategoryTitle>클래스 검색 결과</ResultsCategoryTitle>
        <ProductResultsWrapper>
          <ProductResultsItemWrapper>
            <Link to="/products/:id" style={{ textDecoration: 'none' }}>
              <ProductItem>
                <ProductImg />
                <ProductTitle>희진공방어쩌구</ProductTitle>
                <ProductContent>
                  크리스마스 어쩌구 저쩌구크리스마스 어쩌구 저쩌구크리스마스 어쩌구 저쩌구
                </ProductContent>
              </ProductItem>
            </Link>
          </ProductResultsItemWrapper>
        </ProductResultsWrapper>
      </ResultsCategory>
    </SearchResultsWrapper>
  );
};

const SearchResultsWrapper = styled.section`
  overflow: scroll;
  width: 100%;
  height: calc(100vh - 190px);
`;
const SearchBarWrapper = styled.form`
  width: 300px;
  height: 60px;
  border-radius: 16px;
  margin: calc(50% - 150px);
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 265px;
  height: 45px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
  background-color: white;
  border-radius: 10px;
  line-height: 50px;
  text-align: flex-start;
  padding-left: 20px;
  border: none;
  :focus {
    outline: solid 1px #c4c4c4;
  }
`;

const ResultsLength = styled.div`
  font-size: 16px;
  color: grey;
  font-weight: 600;
  margin-left: 20px;
  margin-top: -10px;
`;

const ResultsCategory = styled.div`
  margin-top: 20px;
`;
const ResultsCategoryTitle = styled.h4`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
`;
const WorkShopResultsWrapper = styled.section`
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  overflow: scroll;
`;
const WorkShopResultsAvatar = styled.div`
  margin: 10px 5px 5px 5px;
`;
const AvatarImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: grey;
`;
const AvatarName = styled.div`
  font-size: 16px;
  color: black;
  text-align: center;
  margin-top: 5px;
`;
const ProductResultsWrapper = styled.section`
  margin-top: 20px;
  padding-bottom: 40px;
  width: 100%;
  overflow: none;
`;
const ProductResultsItemWrapper = styled.div`
  margin: 0px 20px;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  width: calc(100% - 40px);
`;
const ProductItem = styled.div`
  position: relative;
`;
const ProductImg = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 16px;
  background-color: grey;
`;
const ProductTitle = styled.h6`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin-top: 10px;
`;
const ProductContent = styled.div`
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
  color: black;
  margin-top: 5px;
`;
export default SearchResultsPage;
