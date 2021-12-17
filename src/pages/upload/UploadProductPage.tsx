import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/calendar.css';
import { ko } from 'date-fns/esm/locale';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { categoryIcons } from '../../constants/categoryItems';
import { BookingTable, CustomImageUpload, ErrorMessage, GoBack } from '../../components/domain';
import {
  convertCurricurums,
  convertFullDate,
  convertImageArray,
  timeToString,
} from '../../utils/functions';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import { InputData } from '../../types';

const defaultValues = {
  name: '',
  categoryId: undefined,
  intro: '',
  step1: '',
  step2: '',
  step3: '',
  pickedDate: new Date(),
  requiredTime: 1,
  startTime: '',
  maxPeopleNumber: undefined,
  price: undefined,
};

// 빈 칸들 , { required: true } 처리, 에러처리
// 처리 안한부분, imgList, 커리큘럼 부분(커리큘럼은 무조건 3개가 필수인지?)
const UploadProductPage = () => {
  /* 
    직접 접근을 막는 로직 구현해야함
    const { state } = useLocation(); 
    state가 비어있으면 메인페이지로 이동  
  */
  const { token } = useRecoilValue(userState);
  const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);
  const [pickDate, setPickDate] = useState<any | undefined>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm<InputData>({ defaultValues });

  const onSubmit: SubmitHandler<any> = (formData: InputData) => {
    if (pickDate.length && imgSrcArray.length) {
      const { categoryId, intro, maxPeopleNumber, name, price, step1, step2, step3 } = formData;

      const data = {
        // aterilerId 가 들어가야함
        name,
        intro,
        categoryId,
        curricurums: convertCurricurums({ step1, step2, step3 }),
        images: convertImageArray(imgSrcArray),
        classTimes: pickDate,
        maxPeopleNumber,
        price,
        requiredTime: timeToString(formData.requiredTime),
      };
      console.log('data : ', data);
    }
  };

  const handlePost = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { pickedDate, requiredTime, startTime } = getValues();
    if (pickedDate && startTime && requiredTime) {
      const [startHour, startMinute] = startTime.split(':');
      const endHour: number = +startHour + +requiredTime;
      const endTime = endHour + ':' + startMinute;
      setPickDate([
        ...pickDate,
        {
          date: convertFullDate(getValues('pickedDate')),
          startTime: startTime,
          closeTime: endTime,
        },
      ]);
    }
  };

  return (
    <UploadProductPageWrapper>
      <GoBack to={'/'}>돌아가기</GoBack>
      <InputForm onSubmit={handleSubmit(onSubmit)}>
        <InputTitle>클래스 이름</InputTitle>
        <InputBox
          style={{ height: '40px', width: '100% ' }}
          {...register('name', { required: true })}
        />
        {errors.name && <ErrorMessage>클래스 이름을 입력해주세요.</ErrorMessage>}

        <InputTitle>카테고리</InputTitle>
        <InputSelect {...register('categoryId', { required: true })}>
          <option value="">카테고리를 선택해 주세요.</option>
          {categoryIcons.map(({ contents, categoryId }) => (
            <option value={categoryId} key={categoryId}>
              {contents}
            </option>
          ))}
        </InputSelect>
        {errors.categoryId && <ErrorMessage>카테고리를 선택해주세요.</ErrorMessage>}

        <InputTitle>클래스 소개</InputTitle>
        <InputTextArea style={{ height: '100px' }} {...register('intro', { required: true })} />
        {errors.intro && <ErrorMessage>소개란을 작성해주세요.</ErrorMessage>}

        <InputTitle>클래스 이미지</InputTitle>
        <CustomImageUpload
          imgSrcArray={imgSrcArray}
          setImgSrcArray={setImgSrcArray}
          token={token}
        />

        <InputTitle>커리큘럼</InputTitle>
        <InputSubTitle>1단계</InputSubTitle>
        <InputTextArea {...register('step1', { required: true })} />
        <InputSubTitle>2단계</InputSubTitle>
        <InputTextArea {...register('step2', { required: true })} />
        <InputSubTitle>3단계</InputSubTitle>
        <InputTextArea {...register('step3', { required: true })} />
        {(errors.step1 || errors.step2 || errors.step3) && (
          <ErrorMessage>커리큘럼을 작성해주세요.</ErrorMessage>
        )}

        <Controller
          control={control}
          name="pickedDate"
          render={({ field: { value, onChange } }) => {
            return (
              <>
                <ReactDatePicker
                  selected={value}
                  onChange={onChange}
                  inline
                  minDate={new Date()}
                  locale={ko}
                  dateFormat="yyyy-MM-dd"
                />
                <DatePickerWrapper>
                  <MiniInputWrapper>
                    <InputSubTitle>선택 날짜</InputSubTitle>
                    <InputSubTitle style={{ paddingLeft: '10px' }}>
                      {convertFullDate(value)}
                    </InputSubTitle>
                  </MiniInputWrapper>
                </DatePickerWrapper>
              </>
            );
          }}
        />

        <DatePickerWrapper className="dateLists">
          <div>
            <MiniInputWrapper>
              <InputSubTitle>진행 시간</InputSubTitle>
              <Select {...register('requiredTime')}>
                <option value={1}>1시간</option>
                <option value={2}>2시간</option>
                <option value={3}>3시간</option>
                <option value={4}>4시간</option>
              </Select>
            </MiniInputWrapper>

            <MiniInputWrapper>
              <InputSubTitle>시작 시각</InputSubTitle>
              <StyledTimeInput type="time" {...register('startTime')} />
              <Button onClick={handlePost}>+ 추가</Button>
            </MiniInputWrapper>
          </div>

          <InputSubTitle>[클래스 날짜 정보]</InputSubTitle>
          {pickDate.length ? (
            <BookingTable pickDate={pickDate} setPickDate={setPickDate} />
          ) : (
            <ErrorMessage>날짜와 시간을 선택해 주세요!</ErrorMessage>
          )}
        </DatePickerWrapper>

        <RowInputForm>
          <InputTitle>인원</InputTitle>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <InputBox
              type="number"
              style={{ height: '30px', width: '160px' }}
              {...register('maxPeopleNumber', { required: true })}
            />
            <InputSubTitle style={{ fontSize: '20px', marginLeft: '10px' }}>명</InputSubTitle>
          </div>
        </RowInputForm>
        {errors.maxPeopleNumber && (
          <ErrorMessage style={{ textAlign: 'right' }}>최대 인원을 적어주세요.</ErrorMessage>
        )}
        <RowInputForm>
          <InputTitle>가격</InputTitle>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <InputBox
              type="number"
              style={{ height: '30px', width: '160px' }}
              {...register('price', { required: true })}
            />
            <InputSubTitle style={{ fontSize: '20px', marginLeft: '10px' }}>원</InputSubTitle>
          </div>
        </RowInputForm>
        {errors.price && (
          <ErrorMessage style={{ textAlign: 'right' }}>가격을 적어주세요.</ErrorMessage>
        )}

        <Submit type="submit"> 클래스 추가</Submit>
      </InputForm>
    </UploadProductPageWrapper>
  );
};

const UploadProductPageWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
`;
const InputForm = styled.form`
  margin: 20px;
`;
const InputTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;
const StyledTimeInput = styled.input`
  width: 120px;
  height: 20px;
  margin: 0 10px;
  border: solid 1px #c4c4c4;
  border-radius: 4px;
  color: black;
  text-align: center;
`;
const InputSubTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

const InputBox = styled.input`
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: flex-start;
  padding: 0;
`;
const InputSelect = styled.select`
  width: 100%;
  height: 40px;
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: flex-start;
  color: black;
`;
const InputTextArea = styled.textarea`
  width: 100%;
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: flex-start;
  padding: 0;
`;

const Button = styled.button`
  width: 60px;
  height: 20px;
  display: block;
  border: none;
  outline: none;
  border-radius: 4px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  color: #f5f5f5;
  font-weight: 600;
`;
const RowInputForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Submit = styled.button`
  width: 40%;
  height: 50px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border: none;
  text-decoration: none;
  border-radius: 16px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 30%;
`;

const Select = styled.select`
  width: 130px;
  height: 20px;
  border-radius: 4px;
  border: solid 1px #c4c4c4;
  text-align: center;
  font-size: 16px;
  margin-left: 10px;
  color: black;
  padding: 0;
`;

const MiniInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 22px;
`;

const DatePickerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default UploadProductPage;
