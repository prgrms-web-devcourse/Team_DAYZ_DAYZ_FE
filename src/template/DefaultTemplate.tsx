import React from 'react';
import styled from '@emotion/styled';
import { Header } from './Header';
import { Navigator } from './Navigator';
import { useRecoilValue } from 'recoil';
import { navigationState } from '../atoms/atom';

interface Props {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: Props): JSX.Element => {
  const { topNavigation, bottomNavigation } = useRecoilValue(navigationState);

  return (
    <Container>
      {topNavigation && <Header />}
      <StyledMain>{children}</StyledMain>
      {bottomNavigation && <Navigator />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 640px;
  min-height: 100vh;
  margin: auto;
`;
const StyledMain = styled.main`
  flex: 1;
`;

export default DefaultTemplate;
