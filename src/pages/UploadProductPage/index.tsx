import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Plus, MinusCircle } from 'react-feather';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/calendar.css';
import { ko } from 'date-fns/esm/locale';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { categoryIcons } from '../../constants/categoryItems';
import { Inputs, TimeData } from './types';
import { setImageUpload } from '../../utils/api/dayzApi';

const defaultValues = {
  className: '',
  classGenre: '',
  detail: '',
  date: new Date(),
  durationTime: 1,
  startTime: '',
  people: undefined,
  price: undefined,
};

// 빈 칸들 , { required: true } 처리, 에러처리
// 처리 안한부분, imgList, 커리큘럼 부분(커리큘럼은 무조건 3개가 필수인지?)
const UploadProductPage = () => {
  const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);
  const [pickDate, setPickDate] = useState<any | undefined>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<any> = (data: Inputs) => {
    // data, pickDate, imgSrcArray 같이 보내야함
    console.log(pickDate);
    console.log(data);
    console.log(imgSrcArray);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const image = e.target.files[0];
      console.log(image);
      const { status, data } = await setImageUpload(image);
      if (status === 200) {
        setImgSrcArray((prev) => [...prev, data.payload.imageUrl]);
      }
    }
  };

  const handlePost = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { date, durationTime, startTime } = getValues();
    if (date && startTime && durationTime) {
      const [startHour, startMinute] = startTime.split(':');
      const endHour: number = +startHour + +durationTime;
      const endTime = endHour + ':' + startMinute;
      setPickDate([
        ...pickDate,
        {
          fixDate: date.toLocaleDateString(),
          fixStartTime: startTime,
          fixEndTime: endTime,
        },
      ]);
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
    e.preventDefault();
    const target = (e.target as HTMLLIElement).closest('li')?.dataset.id;
    pickDate.splice(pickDate?.indexOf(target), 1);
    setPickDate([...pickDate]);
  };

  return (
    <UploadProductPageWrapper>
      <InputForm onSubmit={handleSubmit(onSubmit)}>
        <InputTitle>클래스 이름</InputTitle>
        <InputBox
          style={{ height: '40px', width: '100% ' }}
          {...register('className', { required: true })}
        />
        {errors.className && <div>클래스 이름을 입력해주세요.</div>}

        <InputTitle>카테고리</InputTitle>
        <InputSelect {...register('classGenre', { required: true })}>
          <option value="">카테고리를 선택해 주세요.</option>
          {categoryIcons.map(({ genre, contents }) => (
            <option value={genre} key={genre}>
              {contents}
            </option>
          ))}
        </InputSelect>
        {errors.classGenre && <div>카테고리를 선택해주세요.</div>}

        <InputTitle>클래스 소개</InputTitle>
        <InputTextArea style={{ height: '100px' }} {...register('detail')} />
        {errors.detail && <div>소개란을 작성해주세요.</div>}

        <InputTitle>클래스 이미지</InputTitle>
        <UploadContainer>
          <Input type="file" accept="image/*" id="addImage" onChange={handleChange} />
          <ImageWrapper>
            {imgSrcArray.length
              ? imgSrcArray.map((something, index) => (
                  <img
                    key={index}
                    src={something}
                    style={{ width: '200px', paddingRight: '20px' }}
                  />
                ))
              : ''}
            <label
              htmlFor="addImage"
              style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <Plus style={{ color: '#f5f5f5', cursor: 'pointer' }} size={40} />
            </label>
          </ImageWrapper>
        </UploadContainer>
        <InputTitle>커리큘럼</InputTitle>
        <InputSubTitle>1단계</InputSubTitle>
        <InputTextArea />
        <InputSubTitle>2단계</InputSubTitle>
        <InputTextArea />
        <InputSubTitle>3단계</InputSubTitle>
        <InputTextArea />

        <Controller
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => {
            return (
              <ReactDatePicker
                selected={value}
                onChange={onChange}
                inline
                minDate={new Date()}
                locale={ko}
                dateFormat="yyyy-MM-dd"
              />
            );
          }}
        />

        <DatePickerWrapper className="dateLists">
          <div>
            <MiniInputWrapper>
              <InputSubTitle>선택 날짜</InputSubTitle>
              <InputSubTitle style={{ paddingLeft: '10px' }}>
                {getValues('date').toLocaleDateString()}
              </InputSubTitle>
            </MiniInputWrapper>
            <MiniInputWrapper>
              <InputSubTitle>진행 시간</InputSubTitle>
              <Select {...register('durationTime')}>
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
          {pickDate ? (
            <table style={{ marginTop: '10px' }}>
              <thead style={{ borderBottom: 'solid 1px #c4c4c4' }}>
                <tr style={{ textAlign: 'center' }}>
                  <th style={{ borderRight: 'solid 1px #c4c4c4' }}>No.</th>
                  <th>선택 날짜</th>
                  <th style={{ padding: '0 10px' }}>시작 시각</th>
                  <th style={{ padding: '0 10px' }}>종료 시각</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {pickDate
                  ? pickDate.map((date: TimeData, index: number) => (
                      <tr key={index + 1} style={{ textAlign: 'center' }}>
                        <td
                          style={{
                            borderRight: 'solid 1px #c4c4c4',
                          }}
                        >
                          {index + 1}
                        </td>
                        <td>{date.fixDate}</td>
                        <td>{date.fixStartTime}</td>
                        <td> {date.fixEndTime}</td>
                        <td onClick={handleDelete}>
                          <MinusCircle style={{ color: 'red' }} size={16} />
                        </td>
                      </tr>
                    ))
                  : ''}
              </tbody>
            </table>
          ) : (
            <div>날짜와 시간을 선택해 주세요!</div>
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
              {...register('people')}
            />
            <InputSubTitle style={{ fontSize: '20px', marginLeft: '10px' }}>명</InputSubTitle>
            {errors.people && <div>최대 인원을 적어주세요.</div>}
          </div>
        </RowInputForm>
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
              {...register('price')}
            />
            <InputSubTitle style={{ fontSize: '20px', marginLeft: '10px' }}>원</InputSubTitle>
            {errors.price && <div>가격을 적어주세요.</div>}
          </div>
        </RowInputForm>

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
const UploadContainer = styled.div`
  width: 100%;
  display: inline-block;
`;
const Input = styled.input`
  display: none;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
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
