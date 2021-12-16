import styled from '@emotion/styled';
import React from 'react';
import { Button, Input, OfficeHourInput, PhoneNumInput } from '../../components/base';
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
        <label>공방 이름</label>
        <Input type="text" />
        <label>사업자 번호</label>
        <Input type="text" />
        <label>공방 소개</label>
        <Input type="text" />
        <label>상세 주소</label>
        <Input type="text" />
        <label>공방 영업 시간</label>
        <OfficeHourInput />
        <label>공방 전화번호</label>
        <PhoneNumInput />
        <SubmitBtn type="submit">가입하기</SubmitBtn>
      </FormContainer>
    </LoginContainer>
  );
}
export default SignupAuthorInfo;

const LoginContainer = styled.div`
  margin: 40px;
`;

const Title = styled.p`
  font-size: 56px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  margin-bottom: 50px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  & input {
    height: 40px;
    margin: 10px 0;
  }
  & select {
    height: 40px;
  }
`;
const SubmitBtn = styled(Button)`
  height: 50px;
  text-decoration: none;
  border-radius: 12px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`;
