import styled from '@emotion/styled';
import React from 'react';
import { Button, Input } from '../../components/base';
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
        <Input type="text" />
        <label htmlFor="BusinessNumber">사업자 번호</label>
        <Input type="text" />
        <SubmitBtn type="submit">가입하기</SubmitBtn>
      </FormContainer>
    </LoginContainer>
  );
}
export default SignupAuthorInfo;

const LoginContainer = styled.div`
  margin: 20px;
`;

const Title = styled.p`
  font-size: 56px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  margin-bottom: 80px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  & input {
    margin: 14px 0;
    height: 54px;
  }
`;
const SubmitBtn = styled(Button)`
  height: 50px;
  text-decoration: none;
  border-radius: 16px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
`;
