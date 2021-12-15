import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Button, Input, OfficeHourInput, PhoneNumInput } from '../../components/base';
import { DUMMY_ATELIER_DATA } from './DUMMY_DATA';
import { FilePlus } from 'react-feather';

const EditPage = () => {
  const { intro, name, imageUrl, address, callNo, startTime, endTime, atelierId } =
    DUMMY_ATELIER_DATA;
  const splitCallNo = callNo.split('-');
  return (
    <EditForm>
      <AvatarContainer>
        <Label>
          <AvatarImg
            src={imageUrl}
            placeholder={imageUrl}
            alt={'profile'}
            size={100}
            shape={'circle'}
            lazy
          />
          <FilePlus
            size={30}
            style={{ position: 'absolute', top: '80px', left: '70px', color: 'black' }}
          />
          <AvatarInput type="file" accept="image/*" />
        </Label>
      </AvatarContainer>
      <InputContainer>
        <Text>공방 이름</Text>
        <InfoInput type="text" value={name} />
      </InputContainer>
      <InputContainer>
        <Text>공방 소개</Text>
        <InfoInput type="text" value={intro} />
      </InputContainer>
      <InputContainer>
        <Text>공방 주소</Text>
        <InfoInput type="text" value={address} />
      </InputContainer>
      <InputContainer>
        <Text>공방 전화번호</Text>
        <PhoneNumInput frontValue={splitCallNo[1]} secondValue={splitCallNo[2]} />
      </InputContainer>
      <InputContainer>
        <Text>공방 영업시간</Text>
        <OfficeHourInput startTime={startTime} endTime={endTime} />
      </InputContainer>
      <SubmitBtn type="submit">저장</SubmitBtn>
    </EditForm>
  );
};
export default EditPage;

const EditForm = styled.form`
  margin-top: 40px;
`;
const InputContainer = styled.div`
  margin: 20px;
  & select,
  input {
    height: 40px;
  }
`;
const Text = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AvatarInput = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

const AvatarImg = styled(Avatar)`
  position: relative;
`;

const Label = styled.label`
  position: relative;
`;

const InfoInput = styled(Input)`
  width: calc(100% - 20px);
  padding-left: 10px;
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
