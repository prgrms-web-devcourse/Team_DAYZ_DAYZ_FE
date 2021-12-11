import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GoBack } from '../../components/domain';

const SearchPage = () => {
  const history = useHistory();
  const [searchList, setSearchList] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchList(event?.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push({
      pathname: `/search/${searchList}`,
      state: searchList,
    });
  };

  return (
    <SearchPageWrapper>
      <GoBack to={'/'}>메인 페이지로 돌아가기</GoBack>
      <SearchBarWrapper onSubmit={handleSubmit}>
        <SearchBar placeholder={'클래스명, 지역으로 검색하기'} onChange={handleChange} autoFocus />
      </SearchBarWrapper>

      <SearchResults>
        <Link to={`/search/${searchList}`} style={{ textDecoration: 'none' }}>
          <SearchResultsItem>{searchList}</SearchResultsItem>
        </Link>
      </SearchResults>
    </SearchPageWrapper>
  );
};

const SearchPageWrapper = styled.section`
  width: 100%;
`;

const SearchBarWrapper = styled.form`
  width: 300px;
  height: 60px;
  border-radius: 16px;
  margin: 0 calc(50% - 150px);
  margin-top: 30px;
  margin-bottom: 50px;
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
    outline: none;
  }
  & {
    -webkit-border: none;
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
  cursor: pointer;
`;

export default SearchPage;
