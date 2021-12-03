import styled from '@emotion/styled';
import React from 'react';
import { ChevronRight } from 'react-feather';

const ProductsList = () => {
  return (
    <ProductsListContainer>
      <p>총 3개의 클래스</p>
      <ProductContainer>
        <img src="https://picsum.photos/id/1/200/300" alt="" />
        <p>하루동안 방탄되어보기</p>
        <ChevronRight />
      </ProductContainer>
    </ProductsListContainer>
  );
};
export default ProductsList;

const ProductsListContainer = styled.div`
  margin: 24px;
`;

const ProductContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  margin-top: 12px;
  background-color: gray;
  display: flex;
  align-items: center;
  & img {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    margin: 0 12px;
  }
`;
