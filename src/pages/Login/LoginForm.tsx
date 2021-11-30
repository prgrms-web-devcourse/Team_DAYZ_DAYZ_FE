import styled from '@emotion/styled';
import React from 'react';
const LoginForm = () => {
  return (
    <div>
      <LoginTitle>
        <p>오늘은</p>
        <p>뭘 해볼까?</p>
      </LoginTitle>
      <p>로그인 또는 회원가입을 해주세요</p>
      <LoginFormContainer>
        <span>이메일</span>
        <input />
        <span>비밀번호</span>
        <input />
        <button>로그인</button>
        <button>KaKao로 시작</button>
        <span>계정이 없으신가요?</span>
        <a href="/">회원가입</a>
      </LoginFormContainer>
    </div>
  );
};

export default LoginForm;

const LoginTitle = styled.p`
  font-size: 36px;
`;

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
