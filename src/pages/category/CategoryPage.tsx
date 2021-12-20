import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GoBack } from '../../components/domain';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { modalState, userState } from '../../atoms';
import { getCategoryClasses } from '../../utils/api/dayzApi';
import { Image } from '../../components/base';

interface CategoryClassType {
  classId: number;
  imageUrl: string;
  intro: string;
  name: string;
}

const CategoryPage = () => {
  const { genre } = useParams<{ genre: string }>();
  const user = useRecoilValue(userState);
  const setModalState = useSetRecoilState(modalState);
  const resetModalState = useResetRecoilState(modalState);
  const [categoryClassData, setCategoryClassData] = useState<any>([]);
  const genreArray = ['도자기', '요리', '플라워', '미술', '뷰티', '음악', '수공예', '액티비티'];
  useEffect(() => {
    setModalState(() => ({
      modalView: true,
    }));
    return () => {
      resetModalState();
    };
  }, []);
  const getAsyncCategoryClasses = useCallback(async () => {
    const response = await getCategoryClasses({ categoryId: +genre, token: user.token });
    if (response.status === 200) {
      setCategoryClassData([...response.data.data.list]);
    }
  }, []);
  useEffect(() => {
    getAsyncCategoryClasses();
  }, []);
  return (
    <CategoryPageWrapper>
      <GoBack to={'/'}>메인 화면으로 돌아가기</GoBack>

      <ResultsCategory>
        <ResultsCategoryTitle>{genreArray[parseInt(genre) - 1]} 전체</ResultsCategoryTitle>
        <ProductResultsWrapper>
          <ProductResultsItemWrapper>
            {categoryClassData.length ? (
              categoryClassData.map(({ classId, imageUrl, intro, name }: CategoryClassType) => (
                <Link key={classId} to={`/products/${classId}`} style={{ textDecoration: 'none' }}>
                  <ProductItem>
                    <div>
                      <Image
                        lazy
                        width={'100%'}
                        src={imageUrl}
                        height={182}
                        alt="class"
                        mode="fill"
                        style={{ borderRadius: '16px' }}
                        placeholder="https://via.placeholder.com/150"
                      />
                    </div>
                    <ProductTitle>{name}</ProductTitle>
                    <ProductContent>{intro}</ProductContent>
                  </ProductItem>
                </Link>
              ))
            ) : (
              <div>아직 클래스가 없어요 ㅠ </div>
            )}
          </ProductResultsItemWrapper>
        </ProductResultsWrapper>
      </ResultsCategory>
    </CategoryPageWrapper>
  );
};

const CategoryPageWrapper = styled.section``;

const ResultsCategory = styled.div`
  margin-top: 20px;
`;
const ResultsCategoryTitle = styled.h4`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
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
const ProductImg = styled.div``;
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
export default CategoryPage;
