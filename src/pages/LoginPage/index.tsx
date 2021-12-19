import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { ArrowRightCircle, ArrowLeftCircle } from 'react-feather';
import { Redirect } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { authUserState, navigationState } from '../../atoms';
import { setSessionStorageItem } from '../../utils/functions';
function LoginPage() {
  const setNavigationState = useSetRecoilState(navigationState);
  const resetPageState = useResetRecoilState(navigationState);
  const isAuthenticated = useRecoilValue(authUserState);

  const saveRole = (role: string) => {
    setSessionStorageItem('LoginRole', role);
  };

  useEffect(() => {
    setNavigationState((prev) => ({
      ...prev,
      topNavigation: false,
      bottomNavigation: false,
    }));
    return () => {
      resetPageState();
    };
  }, []);
  const PATH_REDIRECT_KAKAO = '/redirect-after-kakao';
  const redirectURI = `${process.env.REACT_APP_DAYZ_API_END_POINT}/oauth2/authorization/kakao?redirect_uri=http://localhost:3000${PATH_REDIRECT_KAKAO}`;

  return (
    <>
      {isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <LoginContainer>
          <Title>
            <p>오늘은</p>
            <p>뭘 해볼까?</p>
          </Title>
          <Subtitle>
            <p>카카오톡으로 로그인 또는 회원가입을</p>
            <p>할 수 있어요</p>
          </Subtitle>
          <SelectContainer>
            <UserContainer href={redirectURI}>
              <div onClick={() => saveRole('ROLE_USER')}>
                <p>일반 회원으로</p>
                <p>시작하기</p>
              </div>
              <ArrowRightCircle size={50} />
            </UserContainer>
            <AuthorContainer href={redirectURI}>
              <ArrowLeftCircle size={50} />
              <div onClick={() => saveRole('ROLE_ATELIER')}>
                <p>작가 회원으로</p>
                <p>시작하기</p>
              </div>
            </AuthorContainer>
          </SelectContainer>
        </LoginContainer>
      )}
    </>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  margin: 40px;
`;

const Title = styled.p`
  font-size: 56px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  margin-bottom: 80px;
`;

const SelectContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  font-weight: 600;
`;

const UserContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  & div p:first-of-type {
    margin-bottom: 12px;
  }
`;
const AuthorContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  color: black;
  & div {
    text-align: end;
    & p:first-of-type {
      margin-bottom: 12px;
    }
  }
`;
