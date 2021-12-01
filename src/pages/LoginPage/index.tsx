import styled from '@emotion/styled';
import React from 'react';
function LoginPage() {
  return (
    <div>
      <LoginTitle>
        <p>오늘은</p>
        <p>뭘 해볼까?</p>
      </LoginTitle>
      <p>카카오톡으로 로그인 또는 회원가입을</p>
      <p>할 수 있어요</p>
      <LoginBtnContainer>
        <button>KaKao로 시작</button>
      </LoginBtnContainer>
    </div>
  );
}

export default LoginPage;

const LoginTitle = styled.p`
  font-size: 36px;
`;

const LoginBtnContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
