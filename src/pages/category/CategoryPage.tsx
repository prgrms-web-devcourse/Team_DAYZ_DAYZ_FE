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
      <GoBack to={'/'}>뒤로 가기</GoBack>

      <ResultsCategory>
        <ResultsCategoryTitle>
          {genreArray[parseInt(genre) - 1]} 검색 결과 {categoryClassData.length} 개{' '}
        </ResultsCategoryTitle>
        <ProductResultsItemWrapper>
          {categoryClassData.length ? (
            categoryClassData.map(({ classId, imageUrl, intro, name }: CategoryClassType) => (
              <Link key={classId} to={`/products/${classId}`} style={{ textDecoration: 'none' }}>
                <Image
                  lazy
                  width={170}
                  src={imageUrl}
                  height={120}
                  alt="class"
                  mode="cover"
                  placeholder="https://via.placeholder.com/150"
                  style={{ borderRadius: '8px', marginTop: '20px' }}
                />
                <ProductTitle>{name}</ProductTitle>
                <ProductContent>{intro}</ProductContent>
              </Link>
            ))
          ) : (
            <div>아직 클래스가 없어요 ㅠ </div>
          )}
        </ProductResultsItemWrapper>
      </ResultsCategory>
    </CategoryPageWrapper>
  );
};

const CategoryPageWrapper = styled.section`
  margin: 20px;
`;

const ResultsCategory = styled.div`
  margin-top: 20px;
`;
const ResultsCategoryTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;
const ProductResultsItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 10px;
`;
const ProductTitle = styled.h6`
  font-size: 16px;
  font-weight: 600;
  color: black;
  margin: 10px 0 5px 0;
`;
const ProductContent = styled.div`
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: black;
`;
export default CategoryPage;
