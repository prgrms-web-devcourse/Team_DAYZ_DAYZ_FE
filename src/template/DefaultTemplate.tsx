import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Navigator from './Navigator';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { navigationState } from '../atoms/navigation';
import { authUserState, userState } from '../atoms';
import { getSessionStorageItem } from '../utils/functions';
import { checkAuthorizationUser } from '../utils/api/dayzApi';
import { sessionStorageToken } from '../constants/sessionStorage';

interface Props {
  children: React.ReactNode;
}
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwcm92aWRlcklkIjoiMjAxOTk0ODQ5MSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpc3MiOiJkYXl6IiwiaWQiOjEsImV4cCI6MTYzOTc4MTc1MSwiaWF0IjoxNjM5NzIxNzUxLCJ1c2VybmFtZSI6Iuq5gOyngO2biCJ9.Up9c43nhy6fNvkufA81obPflC-kPMrWVkOo2nplLwOqEKuvehpy3z3am180UTERJYsPsLpqvVxVtixRGSCTw3A

const DefaultTemplate = ({ children }: Props): JSX.Element => {
  const { topNavigation, bottomNavigation } = useRecoilValue(navigationState);

  // 로그인 기능 + storage에 token을 넣는 기능이 추가되면 주석을 풀어주세요.
  // const token = getSessionStorageItem(sessionStorageToken.token, '');
  // const setUserData = useSetRecoilState(userState);
  // const setAuthUser = useSetRecoilState(authUserState);

  // const AuthUser = useCallback(async () => {
  //   const response = await checkAuthorizationUser({ token });
  //   if (response.status === 200) {
  //     setUserData({ ...response.data.data });
  //     setAuthUser(true);
  //   }
  // }, [token]);
  //
  // useEffect(() => {
  //   AuthUser();
  // }, [AuthUser]);

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
