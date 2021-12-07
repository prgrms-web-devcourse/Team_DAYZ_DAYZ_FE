import styled from '@emotion/styled';
import React from 'react';
import LinkBox from '../../components/domain/LinkBox';

const ProductsList = () => {
  return (
    <ProductsListContainer>
      <ProductsCnt>총 3개의 클래스</ProductsCnt>
      <LinkBox src={'https://picsum.photos/id/1/200/300'}>
        <p>하루동안 방탄되어보기</p>
      </LinkBox>
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
