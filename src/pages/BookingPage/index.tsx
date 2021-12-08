import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/calendar.css';

// <Route path="/booking/:id" exact component={BookingPage} />

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
