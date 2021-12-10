import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkBox } from '../../components/domain';
import { Plus } from 'react-feather';

const ProductsListPage = () => {
  return (
    <ProductsListContainer>
      <ProductsCnt>
        총 <strong style={{ fontWeight: '600' }}>{DummyData.data.totalCount}</strong> 개의 결과
      </ProductsCnt>
      {DummyData.data.class
        ? DummyData.data.class.map((list) => (
            <LinkBox key={list.classId} src={list.imageUrl}>
              <p>{list.name}</p>
            </LinkBox>
          ))
        : ''}
      <Link to="/upload/products">
        <ProductAdd>
          <Plus size={50} style={{ color: '#f5f5f5' }} />
        </ProductAdd>
        <Balloon>
          버튼을 눌러 <br />
          클래스를 추가하세요!
        </Balloon>
      </Link>
    </ProductsListContainer>
  );
};
export default ProductsListPage;

const ProductsListContainer = styled.div`
  margin: 14px;
`;

const ProductsCnt = styled.div`
  margin-bottom: 12px;
`;

const ProductAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  position: fixed;
  right: 20px;
  bottom: 80px;
  &:hover + div {
    display: block;
  }
`;

const Balloon = styled.div`
  display: none;
  position: fixed;
  right: -40px;
  bottom: 120px;
  margin: 50px;
  width: 200px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  align-items: center;
  padding: 10px 0 0 0;
  color: black;
  &:after {
    border-top: 10px solid #f5f5f5;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    bottom: -10px;
    right: 40px;
  }
`;
