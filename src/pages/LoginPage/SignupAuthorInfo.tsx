import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { navigationState } from '../../atoms';
import { Button, Input, OfficeHourInput, PhoneNumInput } from '../../components/base';
import { LoginLocationSetter } from '../../components/domain';
function SignupAuthorInfo() {
  const setNavigationState = useSetRecoilState(navigationState);
  const resetPageState = useResetRecoilState(navigationState);
  useEffect(() => {
    setNavigationState((prev) => ({
      ...prev,
      topNavigation: false,
      bottomNavigation: false,
    }));
    return () => {
      resetPageState();
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onClick = () => {
    console.log('click');
  };

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
        <Input type="text" {...(register('name'), { required: true })} />
        <span>{errors?.name?.message}</span>
        <label>사업자 번호</label>
        <Input type="text" {...(register('businessNumber'), { required: true })} />
        <label>공방 소개</label>
        <Input type="text" {...(register('intro'), { required: true })} />
        <label>상세 주소</label>
        <LoginLocationSetterContainer>
          <LoginLocationSetter />
        </LoginLocationSetterContainer>
        <Input type="text" {...(register('addressDetail'), { required: true })} />
        <label>공방 영업 시간</label>
        <OfficeHourInput />
        <label>공방 전화번호</label>
        <PhoneNumInput />
        <SubmitBtn type="submit" onClick={onClick}>
          가입하기
        </SubmitBtn>
      </FormContainer>
    </LoginContainer>
  );
}
export default SignupAuthorInfo;

const LoginContainer = styled.div`
  margin: 40px;
`;

const Title = styled.div`
  font-size: 56px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.div`
  margin-bottom: 50px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  & label {
    margin: 24px 0 12px 0;
  }
  & input {
    height: 40px;
  }
  & select {
    height: 40px;
  }
`;
const LoginLocationSetterContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const SubmitBtn = styled(Button)`
  height: 50px;
  text-decoration: none;
  border-radius: 12px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
  margin-top: 36px;
`;
