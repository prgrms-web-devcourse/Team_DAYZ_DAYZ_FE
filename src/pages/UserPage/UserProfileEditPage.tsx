import styled from '@emotion/styled';
import React from 'react';
import { Button, Input } from '../../components/base';

const UserProfileEditPage = () => {
  return (
    <UserEditWrapper>
      <UserEditForm>
        <UserAvatarWrapper>
          <UserAvatar />
          <AvatarChange type="file" accept="image/*" />
        </UserAvatarWrapper>

        <UserInputItem>
          <UserInputName>이름</UserInputName>
          <InfoInput type="text" />
        </UserInputItem>
        <UserInputItem>
          <UserInputName>비밀번호</UserInputName>
          <InfoInput type="password" />
        </UserInputItem>
        <UserInputItem>
          <UserInputName>비밀번호 확인</UserInputName>
          <InfoInput type="password" />
        </UserInputItem>
        <SubmitBtn type="submit">저장</SubmitBtn>
      </UserEditForm>
    </UserEditWrapper>
  );
};
const UserEditWrapper = styled.section``;
const UserEditForm = styled.form`
  margin-top: 40px;
  width: 100%;
`;
const UserInputItem = styled.div`
  margin: 20px;
`;
const UserInputName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const UserAvatarWrapper = styled.div`
  margin-left: calc(50% - 50px);
`;
const UserAvatar = styled.div`
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
export default UserProfileEditPage;
