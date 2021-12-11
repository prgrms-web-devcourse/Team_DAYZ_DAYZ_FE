import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Button, Input, Upload } from '../../components/base';
import { Settings } from 'react-feather';

const UserProfileEditPage = () => {
  const [imgLink, setImgLink] = useState<string | undefined>(undefined);
  return (
    <UserEditWrapper>
      <UserEditForm>
        <UserAvatarWrapper>
          <Upload droppable accept="image/*" imgLink={imgLink} setImgLink={setImgLink}>
            {(file: File, dragging: React.DragEvent<HTMLDivElement>) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '10px',
                    overflowX: 'scroll',
                  }}
                >
                  {file ? (
                    <img
                      src={imgLink}
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'fill',
                      }}
                    />
                  ) : (
                    <UserAvatar />
                  )}

                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      background:
                        'linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <Settings style={{ color: '#f5f5f5' }} size={20} />
                  </div>
                </div>
              );
            }}
          </Upload>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
