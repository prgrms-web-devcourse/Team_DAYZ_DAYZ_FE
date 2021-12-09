import styled from '@emotion/styled';
import React from 'react';
import { LinkBox } from '../../components/domain';

const ProductsList = () => {
  const DummyData = {
    data: {
      class: [
        {
          classId: 1,
          name: '킹왕짱클래스',
          imageUrl: 'http://s3.abc.jpg',
        },
        {
          classId: 2,
          name: '짱클래스짱',
          imageUrl: 'http://s3.abc.jpg',
        },
      ],
      totalCount: 10,
      pageIndex: 0,
      hasNext: false,
    },
  };
  return (
    <ProductsListContainer>
      <ProductsCnt>총{DummyData.data.totalCount}개의 결과</ProductsCnt>
      {DummyData.data.class
        ? DummyData.data.class.map((list) => (
            <LinkBox key={list.classId} src={list.imageUrl}>
              <p>{list.name}</p>
            </LinkBox>
          ))
        : ''}
    </ProductsListContainer>
  );
};
export default ProductsList;

const ProductsListContainer = styled.div`
  margin: 14px;
`;

const ProductsCnt = styled.div`
  margin-bottom: 12px;
`;
