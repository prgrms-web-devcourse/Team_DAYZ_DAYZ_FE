import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { navigationState, userState } from '../../atoms';
import { Button, Input } from '../../components/base';
import { LoginLocationGetter } from '../../components/domain';
import { setAtelierInfo } from '../../utils/api/dayzApi';
import { Address, AtelierInfo } from '../../utils/api/types';
function SignupAuthorInfo() {
  const setNavigationState = useSetRecoilState(navigationState);
  const resetPageState = useResetRecoilState(navigationState);
  const regionSelect = React.createRef<HTMLSelectElement>();
  const history = useHistory();
  const { token } = useRecoilValue(userState);
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
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, businessNumber, intro, addressDetail, workStartTime, workEndTime, callNumber } =
      data;
    const regionId = +(regionSelect.current?.value ?? '1');
    const address: Address = {
      cityId: 1,
      regionId,
      detail: addressDetail,
    };
    const atelierInfo: AtelierInfo = {
      name,
      businessNumber,
      intro,
      address,
      workStartTime,
      workEndTime,
      callNumber,
    };
    try {
      const res = await setAtelierInfo(token, atelierInfo);
      if (res.status === 200) {
        history.push('/signup/check-location');
      } else {
        history.push('/nothing');
      }
    } catch (error) {
      console.log(error);
      history.push('/nothing');
    }
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>공방 이름</label>
        <Input type="text" {...register('name', { required: true })} />
        <span>{errors?.name?.message}</span>
        <label>사업자 번호</label>
        <Input type="text" {...register('businessNumber', { required: true })} />
        <span>{errors?.businessNumber?.message}</span>
        <label>공방 소개</label>
        <Input type="text" {...register('intro', { required: true })} />
        <span>{errors?.intro?.message}</span>
        <label>상세 주소</label>
        <LoginLocationGetterContainer>
          <LoginLocationGetter ref={regionSelect} />
        </LoginLocationGetterContainer>
        <Input type="text" {...register('addressDetail', { required: true })} />
        <span>{errors?.addressDetail?.message}</span>
        <label>공방 영업 시간</label>
        <InputContainer>
          <InfoInput type="time" {...register('workStartTime', { required: true })} />
          <Dash>~</Dash>
          <InfoInput type="time" {...register('workEndTime', { required: true })} />
        </InputContainer>
        {/* <OfficeHourInput /> */}
        <span>{errors?.workStartTime?.message}</span>
        <label>공방 전화번호</label>
        <Input
          type="number"
          {...register('callNumber', {
            required: true,
          })}
        />
        <span>{errors?.callNumber?.message}</span>
        <SubmitBtn type="submit">다음</SubmitBtn>
      </Form>
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

const Form = styled.form`
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
const LoginLocationGetterContainer = styled.div`
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoInput = styled(Input)`
  width: 100%;
`;

const Dash = styled.div`
  font-size: 30px;
  margin: 0 10px;
`;
