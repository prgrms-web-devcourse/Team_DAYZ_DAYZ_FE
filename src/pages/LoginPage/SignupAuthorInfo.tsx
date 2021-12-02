import styled from '@emotion/styled';
import React from 'react';
function SignupAuthorInfo() {
  return (
    <LoginContainer>
      <Title>
        <p>환영해요!</p>
      </Title>
      <Subtitle>
        <p>사업자번호를 가지고 있는 공방만</p>
        <p>등록할 수 있어요</p>
      </Subtitle>
      <FormContainer>
        <label htmlFor="workshopName">공방 이름</label>
        <input type="text" id="workshopName" name="workshopName" />
        <label htmlFor="BusinessNumber">사업자 번호</label>
        <input type="text" id="BusinessNumber" name="BusinessNumber" />
        <button>가입하기</button>
      </FormContainer>
    </LoginContainer>
  );
}
export default SignupAuthorInfo;

const LoginContainer = styled.div`
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 600;
  & input {
    background-color: gray;
    margin: 24px 0;
    border-style: none;
    height: 54px;
    border-radius: 12px;
  }
  & button {
    background-color: #eed6fc;
    border-style: none;
    height: 54px;
    border-radius: 12px;
    margin-top: 24px;
    font-size: 24px;
  }
`;
