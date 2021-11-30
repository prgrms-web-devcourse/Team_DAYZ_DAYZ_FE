import styled from '@emotion/styled';
import React from 'react';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>HomePage입니다.</Container>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  overflow: scroll;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 1000px;
`;

export default HomePage;
