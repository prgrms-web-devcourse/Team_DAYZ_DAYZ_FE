import Input from '../../components/base/Input';
import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../../components/base';

const Edit = () => {
  return (
    <>
      <UserEditForm>
        <AvatarContainer>
          <Avator />
          <AvatarChange type="file" accept="image/*" />
        </AvatarContainer>
        <InputContainer>
          <Text>이름</Text>
          <InfoInput type="text" />
        </InputContainer>
        <InputContainer>
          <Text>비밀번호</Text>
          <InfoInput type="text" />
        </InputContainer>
        <InputContainer>
          <Text>비밀번호 확인</Text>
          <InfoInput type="text" />
        </InputContainer>
        <SubmitBtn type="submit">저장</SubmitBtn>
      </UserEditForm>
    </>
  );
};
export default Edit;

const UserEditForm = styled.form`
  margin-top: 40px;
`;
const InputContainer = styled.div`
  margin: 20px;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const AvatarContainer = styled.div`
  margin-left: calc(50% - 50px);
`;
const Avator = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: grey;
  border: none;
`;
const AvatarChange = styled.input`
  margin-top: 10px;
`;
const InfoInput = styled(Input)`
  width: calc(100% - 20px);
  height: 40px;
  font-size: 16px;
  padding-left: 20px;
`;
const SubmitBtn = styled(Button)`
  width: 40%;
  height: 50px;
  text-decoration: none;
  border-radius: 16px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
  margin-left: 30%;
`;
