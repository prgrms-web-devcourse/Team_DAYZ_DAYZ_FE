import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Button, Input } from '../../components/base';
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
        <div>
          <select name="phoneNumberType" id="phoneNumberType">
            <option value="010">010</option>
            <option value="02">02</option>
          </select>
          <InfoInput type="number" value={splitCallNo[1]} />
          <Dash>-</Dash>
          <InfoInput type="number" value={splitCallNo[2]} />
        </div>
      </InputContainer>
      <InputContainer>
        <Text>공방 영업시간</Text>
        <div>
          <InfoInput type="time" value={startTime} />
          <Dash>~</Dash>
          <InfoInput type="time" value={endTime} />
        </div>
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
  & > div {
    display: flex;
    & select {
      border-radius: 8px;
      margin-right: 20px;
    }
  }
`;
const Text = styled.div`
  font-size: 16px;
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
const Dash = styled.div`
  font-size: 30px;
  margin: 0 10px;
`;
