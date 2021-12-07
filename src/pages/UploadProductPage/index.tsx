import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Upload } from '../../components/base';
import { Plus } from 'react-feather';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import './calendar.css';
import { ko } from 'date-fns/esm/locale';
import { MinusCircle } from 'react-feather';

const UploadProductPage = () => {
  const [date, setDate] = useState(new Date());
  const [imgLink, setImgLink] = useState<string | undefined>(undefined);
  const [pickDate, setPickDate] = useState<any | undefined>('');

  const handlePost = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setPickDate([...pickDate, date.toDateString()]);
  };

  const handleDelete = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    const target = (e.target as HTMLLIElement).closest('li')?.dataset.id;
    pickDate.splice(pickDate?.indexOf(target), 1);
    setPickDate([...pickDate]);
  };

  return (
    <UploadProductPageWrapper>
      <InputForm>
        <InputTitle>클래스 이름</InputTitle>
        <InputBox style={{ height: '40px', width: 'calc(100% - 20px)' }} />
        <InputTitle>카테고리</InputTitle>
        <InputSelect>
          <option>요리</option>
          <option>도자기</option>
          <option>플라워</option>
          <option>미술</option>
          <option>뷰티</option>
          <option>음악</option>
          <option>수공예</option>
          <option>액티비티</option>
        </InputSelect>
        <InputTitle>클래스 소개</InputTitle>
        <InputTextArea style={{ height: '100px' }} />
        <InputTitle>클래스 이미지</InputTitle>
        <Upload droppable accept="image/*" setImgLink={setImgLink}>
          {(file: File, dragging: React.DragEvent<HTMLDivElement>) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                {file ? <img src={imgLink} style={{ width: '300px', marginRight: '20px' }} /> : ''}

                <div
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
                  <Plus style={{ color: '#f5f5f5' }} size={40} />
                </div>
              </div>
            );
          }}
        </Upload>
        <InputTitle>커리큘럼</InputTitle>
        <InputSubTitle>1단계</InputSubTitle>
        <InputTextArea />
        <InputSubTitle>2단계</InputSubTitle>
        <InputTextArea />
        <InputSubTitle>3단계</InputSubTitle>
        <InputTextArea />
        <ReactDatePicker
          selected={date}
          locale={ko}
          dateFormat="yyyy-MM-dd"
          onChange={(date: Date) => setDate(date)}
          inline
        />
        <ul className="dateLists">
          <InputSubTitle>선택한 날짜</InputSubTitle>
          {pickDate
            ? pickDate.map((date: any) => (
                <li
                  key={date}
                  data-id={date}
                  style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                >
                  <MinusCircle style={{ color: 'red' }} size={16} onClick={handleDelete} />
                  <DateDiv>{date}</DateDiv>
                </li>
              ))
            : ''}
        </ul>

        <Button onClick={handlePost}>+ 추가</Button>

        <RowInputForm>
          <InputTitle>인원</InputTitle>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <InputBox type="number" style={{ height: '30px', width: '40px' }} />
            <InputSubTitle style={{ fontSize: '20px', marginLeft: '10px' }}>명</InputSubTitle>
          </div>
        </RowInputForm>
        <RowInputForm>
          <InputTitle>가격</InputTitle>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <InputBox type="number" style={{ height: '30px', width: '80px' }} />
            <InputSubTitle style={{ fontSize: '20px', marginLeft: '10px' }}>원</InputSubTitle>
          </div>
        </RowInputForm>
        <Submit> 클래스 추가</Submit>
      </InputForm>
    </UploadProductPageWrapper>
  );
};

const UploadProductPageWrapper = styled.section``;
const InputForm = styled.form`
  margin: 20px;
`;
const InputTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
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
  padding-left: 20px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: flex-start;
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
`;
const InputTextArea = styled.textarea`
  width: calc(100% - 20px);
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  margin-top: 10px;
  padding-left: 20px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: flex-start;
`;
const Button = styled.button`
  width: 60px;
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
  margin-left: 30%;
`;
const DateDiv = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;
export default UploadProductPage;
