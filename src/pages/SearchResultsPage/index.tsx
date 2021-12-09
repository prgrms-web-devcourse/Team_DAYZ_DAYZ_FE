import React from 'react';
import styled from '@emotion/styled';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Image } from '../../components/base';
import { DUMMY_ATELIER_DATA, DUMMY_CLASS_DATA } from './DUMMY_DATA';

// search Result 페이지는 api 호출을 2번 해야함 api 통신하면 DUMMY 삭제
// 1. 공방 이름으로 검색 https://backend-devcourse.notion.site/03b13e4a9c5e4a32ae98ad2680c6506c
// 2. 원데이 클래스 이름으로 검색 https://backend-devcourse.notion.site/d6e856ebdeef4f87a285a9fb6248d1d5

const SearchResultsPage = () => {
  const history = useHistory();

  return (
    <SearchResultsWrapper>
      <SearchBarWrapper>
        <SearchBar
          placeholder={'클래스명, 지역으로 검색하기'}
          onClick={() => history.push('/search')}
        />
      </SearchBarWrapper>
      <ResultsLength>{DUMMY_CLASS_DATA.totalCount}개의 검색 결과</ResultsLength>
      <ResultsCategory>
        <ResultsCategoryTitle>공방 검색 결과</ResultsCategoryTitle>
        <WorkShopResultsWrapper>
          {DUMMY_ATELIER_DATA?.map(({ atelierId, name, intro, imgUrl }) => (
            <WorkShopResultsAvatar key={atelierId}>
              <AvatarImgWrapper>
                <Avatar
                  src={imgUrl}
                  placeholder={
                    'https://toppng.com/uploads/preview/cool-effects-clipart-light-light-11562922881laz07nkaie.png'
                  }
                  alt={'profile'}
                  size={60}
                  shape={'circle'}
                  lazy
                />
              </AvatarImgWrapper>
              <AvatarName>{name}</AvatarName>
            </WorkShopResultsAvatar>
          ))}
        </WorkShopResultsWrapper>
      </ResultsCategory>
      <ResultsCategory>
        <ResultsCategoryTitle>클래스 검색 결과</ResultsCategoryTitle>
        <ProductResultsWrapper>
          <ProductResultsItemWrapper>
            {DUMMY_CLASS_DATA.classes?.map(({ classId, name, intro, imageUrl }) => (
              <Link to={`/products/${classId}`} style={{ textDecoration: 'none' }} key={classId}>
                <ProductItem>
                  <Image
                    width={'100%'}
                    height={'25vh'}
                    src={imageUrl}
                    alt={'product'}
                    mode={'cover'}
                    lazy
                  />
                  <ProductTitle>{name}</ProductTitle>
                  <ProductContent>{intro}</ProductContent>
                </ProductItem>
              </Link>
            ))}
          </ProductResultsItemWrapper>
        </ProductResultsWrapper>
      </ResultsCategory>
    </SearchResultsWrapper>
  );
};

const SearchResultsWrapper = styled.section`
  width: 100%;
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
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const WorkShopResultsAvatar = styled.div`
  margin: 10px 10px 5px 5px;
`;

const AvatarImgWrapper = styled.div`
  display: flex;
  justify-content: center;
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
