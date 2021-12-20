import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Image } from '../../components/base';
import { categoryIcons } from '../../constants/categoryItems';
import { modalState, userState } from '../../atoms';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { getAtelierLists, getPopularClasses } from '../../utils/api/dayzApi';

// 1. 카테고리 목록 조회 https://backend-devcourse.notion.site/d1a5d88893d642a48e169f5ccc10cc7c
// 2. 금주의 인기 클래스 조회 https://backend-devcourse.notion.site/66ebc05aa398421dbf463023b8a9224f
// 3. 공방 목록 조회 https://backend-devcourse.notion.site/6c1b449c3ae846a88f262fc67f25a281
// 동기 처리하면 DUMMY_DATA는 삭제
interface Atelier {
  atelierId: number;
  imageUrl: string;
  intro: string;
  name: string;
}
const HomePage = () => {
  const setModalState = useSetRecoilState(modalState);
  const resetModalState = useResetRecoilState(modalState);
  useEffect(() => {
    setModalState(() => ({
      modalView: true,
    }));
    return () => {
      resetModalState();
    };
  }, []);

  const userInfo = useRecoilValue(userState);
  const { token, cityId, regionId } = userInfo;
  const [popularClassesData, setPopularClassesData] = useState<any | ''>([]);
  const [newAtelierData, setNewAtelierData] = useState<any>([]);

  useEffect(() => {
    async function popularClasses(token: string) {
      return await getPopularClasses(token).then((response) =>
        setPopularClassesData([...response.data.data.oneDayClasses]),
      );
    }
    async function recentAtelier(token: string) {
      return await getAtelierLists(token).then((response) => {
        setNewAtelierData([...response.data.data.list]);
      });
    }
    popularClasses(token);
    recentAtelier(token);
  }, []);

  return (
    <MainPageWrapper>
      <Container>
        <SearchBarWrapper>
          <Link to="/search" style={{ textDecoration: 'none' }}>
            <PlaceHolder>공방이름,지역,클래스명으로 검색</PlaceHolder>
          </Link>
        </SearchBarWrapper>

        <CategoryWrapper>
          {categoryIcons.map(({ categoryId, genre, Icon, contents }) => (
            <Link
              to={`/category/${categoryId}`}
              key={categoryId}
              style={{
                textDecoration: 'none',
              }}
            >
              <CategoryItem>
                <Icon size={28} />
                <div>{contents}</div>
              </CategoryItem>
            </Link>
          ))}
        </CategoryWrapper>
        <BestClassesWrapper>
          <Title>금주의 인기 클래스</Title>
          <BestClassItemWrapper>
            {popularClassesData.length ? (
              popularClassesData?.map(({ classId, name, imageUrl, intro }: any) => (
                <Link to={`/products/${classId}`} key={classId}>
                  <BestClassesItem>
                    <Image
                      lazy
                      src={imageUrl}
                      placeholder="https://via.placeholder.com/150"
                      width={200}
                      height={120}
                      alt="Atelier"
                      mode="fill"
                      style={{ borderRadius: '16px' }}
                    />
                    <BestClassesTitle>{name}</BestClassesTitle>
                  </BestClassesItem>
                </Link>
              ))
            ) : (
              <div>인기 클래스가 없어요 ㅠ</div>
            )}
          </BestClassItemWrapper>
        </BestClassesWrapper>

        <NewClassesWrapper>
          <Title>신규 공방</Title>
          <NewClassesItemWrapper>
            {newAtelierData.length ? (
              newAtelierData.map(({ atelierId, name, imageUrl, intro }: Atelier) => (
                <Link to={`/workshop/${atelierId}`} key={atelierId}>
                  <NewClassesItem>
                    <Image
                      lazy
                      src={imageUrl}
                      placeholder="https://via.placeholder.com/150"
                      width={'100%'}
                      height={'100%'}
                      alt="Atelier"
                      mode="fill"
                      style={{ borderRadius: '16px', position: 'absolute' }}
                    />
                    <NewClassesTitle>{name}</NewClassesTitle>
                  </NewClassesItem>
                </Link>
              ))
            ) : (
              <div>신규 공방이 없어요 ㅠ</div>
            )}
          </NewClassesItemWrapper>
        </NewClassesWrapper>
      </Container>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchBarWrapper = styled.section`
  width: 300px;
  height: 60px;
  border-radius: 16px;
  margin: 30px calc(50% - 150px);
  margin-top: 40px;
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
  margin-top: 20px;
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
  box-sizing: border-box;
`;
const BestClassesWrapper = styled.section`
  width: 100%;
`;
const BestClassItemWrapper = styled.div`
  width: calc(100% - 40px);
  margin-left: 20px;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BestClassesItem = styled.div`
  position: relative;
  margin-right: 10px;
  text-align: center;
  word-break: keep-all;
`;
const BestClassesTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #f5f5f5;
`;

const NewClassesWrapper = styled.section`
  margin-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  overflow-x: hidden;
`;
const NewClassesItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 0 20px;
`;
const NewClassesItem = styled.div`
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
`;
const NewClassesTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #f5f5f5;
`;
export default HomePage;
