import styled from '@emotion/styled';
import React from 'react';
import { ArrowRightCircle, ArrowLeftCircle } from 'react-feather';
function LoginPage() {
  return (
    <LoginHomeContainer>
      <Title>
        <p>오늘은</p>
        <p>뭘 해볼까?</p>
      </Title>
      <Subtitle>
        <p>카카오톡으로 로그인 또는 회원가입을</p>
        <p>할 수 있어요</p>
      </Subtitle>
      <SelectContainer>
        <UserContainer>
          <div>
            <p>일반 회원으로</p>
            <p>시작하기</p>
          </div>
          <ArrowRightCircle size={90} />
        </UserContainer>
        <AuthorContainer>
          <ArrowLeftCircle size={90} />
          <div>
            <p>작가 회원으로</p>
            <p>시작하기</p>
          </div>
        </AuthorContainer>
      </SelectContainer>
    </LoginHomeContainer>
  );
}

export default LoginPage;

const LoginHomeContainer = styled.div`
  margin: 40px;
`;

const Title = styled.p`
  font-size: 58px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 180px;
`;

const SelectContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 58px;
  font-weight: 600;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
  & div p:first-child {
    margin-bottom: 12px;
  }
`;
const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    text-align: end;
    & p:first-child {
      margin-bottom: 12px;
    }
  }
`;
