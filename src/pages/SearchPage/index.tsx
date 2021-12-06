import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [searchList, setSearchList] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchList(event?.currentTarget.value);
  };
  return (
    <SearchPageWrapper>
      <SearchBackButtonWrapper>
        <Link to="/">
          <ChevronLeft size={40} />
        </Link>
        <SearchBackButtonText> 메인 페이지로 돌아가기</SearchBackButtonText>
      </SearchBackButtonWrapper>

      <SearchBarWrapper>
        <SearchBar placeholder={'클래스명, 지역으로 검색하기'} onChange={handleChange} autoFocus />
      </SearchBarWrapper>

      <SearchResults>
        {/* <SearchResultsItem>크리스마스</SearchResultsItem>
        <SearchResultsItem>크리스마스 케익</SearchResultsItem>
        <SearchResultsItem>크리스마스 리스</SearchResultsItem> */}
        <Link to="/search/results" style={{ textDecoration: 'none' }}>
          <SearchResultsItem>{searchList}</SearchResultsItem>
        </Link>
      </SearchResults>
    </SearchPageWrapper>
  );
};

const SearchPageWrapper = styled.section`
  width: 100%;
`;
const SearchBackButtonWrapper = styled.div`
  /* position: fix; */
  /* top: 0; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const SearchBackButtonText = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const SearchBarWrapper = styled.form`
  width: 300px;
  height: 60px;
  border-radius: 16px;
  margin: 50px calc(50% - 150px);
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

const SearchResults = styled.ul`
  margin-left: 40px;
  margin-top: -10px;
`;
const SearchResultsItem = styled.li`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: black;
`;

export default SearchPage;
