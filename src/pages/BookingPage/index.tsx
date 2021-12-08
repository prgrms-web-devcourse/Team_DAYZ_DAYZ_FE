import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useParams } from 'react-router';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';
import './calendar.css';

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  // date는 Object
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div>
        {id} 에 대한 예약 페이지 입니다.
        <ReactDatePicker selected={date} onChange={(date: Date) => setDate(date)} inline />
      </div>
      {date.toDateString()}
      <br />
      {date.toString()}
    </>
  );
};

export default BookingPage;
