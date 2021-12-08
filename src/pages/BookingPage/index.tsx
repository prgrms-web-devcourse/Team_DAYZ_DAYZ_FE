import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/calendar.css';

// <Route path="/booking/:id" exact component={BookingPage} />
const district = [
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '구로구',
  '금천구',
  '노원구',
  '도봉구',
  '동대문구',
  '동작구',
  '마포구',
  '서대문구',
  '서초구',
  '성동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];
const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const { id } = useParams<{ id: string }>();

  const [pickState, setPickState] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target: string = e.target.value;
    if (!pickState?.includes(target)) {
      if (pickState.length < 3) {
        setPickState([...pickState, target]);
      } else {
        pickState.shift();
        setPickState([...pickState, target]);
      }
    } else {
      setPickState(pickState.filter((pick: string) => pick !== target));
    }
  };

  useEffect(() => {
    // date가 바끨때마다 호출 해야함.
    console.log(date);
  }, [date]);

  return (
    <>
      <div>
        <ReactDatePicker
          selected={date}
          onChange={(date: Date) => setDate(date)}
          inline
          minDate={new Date()}
        />
        <Wrapper onChange={handleChange}>
          {district.map((location) => (
            <ToggleContainer key={location}>
              {/* disabled -  받은 인원이 0일 경우 true 아니면 false */}
              <Input
                type="checkbox"
                value={location}
                disabled={false}
                checked={pickState?.includes(location)}
              />
              <Button>
                {/* <div>마감됨/ 모집중</div> */}
                <div>{location}</div>
                <div>1/5</div>
              </Button>
            </ToggleContainer>
          ))}
        </Wrapper>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {date.toDateString()}
      <br />
      {date.toString()}
      <br />
      {date.toTimeString()}
      <br />
      {date.toLocaleDateString()}
      <br />
      {date.toLocaleString()}
      <br />
      {date.toLocaleTimeString()}
      <br />
      {date.valueOf()}
    </>
  );
};
const Wrapper = styled.form`
  display: flex;
  /* width: 100%; */
  overflow-x: scroll;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const Input = styled.input`
  display: none;
  &:checked + div {
    background: #b88bd6;
    color: #f5f5f5;
    border: none;
  }
`;

const Button = styled.div`
  width: 18vw;
  max-width: 90px;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  color: #c4c4c4;
  border: solid 1px #c4c4c4;
  border-radius: 20px;
  display: block;
  padding: 5px 10px;
  text-align: center;
  margin: 5px;
`;
export default BookingPage;
