import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/calendar.css';
import { GoBack } from '../../components/domain';
import { Button, Text } from '../../components/base';
import { Link } from 'react-router-dom';

// <Route path="/booking/:id" exact component={BookingPage} />

type Data = { time: string; available: number };

const totalPeople = 5;

const Dummy_Data: Data[] = [
  {
    time: '09:00 - 10:00',
    available: 3,
  },
  {
    time: '11:00 - 12:00',
    available: 2,
  },
  {
    time: '14:00 - 16:00',
    available: 0,
  },

  {
    time: '13:00 - 14:00',
    available: 1,
  },
  {
    time: '16:00 - 17:00',
    available: 5,
  },
];
const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const { id } = useParams<{ id: string }>();
  // state에 시간과 비어있는 인원값이 들어가야한다.
  const [pickState, setPickState] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target: string = e.target.value;
    if (!pickState?.includes(target)) {
      setPickState([target]);
    } else {
      setPickState(pickState.filter((pick: string) => pick !== target));
    }
  };

  useEffect(() => {
    // date가 바끨때마다 호출 해야함.
    console.log(date);
    setPickState([]);
  }, [date]);

  return (
    <>
      <GoBack to={`/products/${id}`}>이전으로 돌아가기</GoBack>
      <div>
        <ReactDatePicker
          selected={date}
          onChange={(date: Date) => setDate(date)}
          inline
          minDate={new Date()}
        />
        <Wrapper onChange={handleChange}>
          {Dummy_Data.map(({ time, available }) => (
            <ToggleContainer key={time}>
              <Input
                type="checkbox"
                value={time}
                disabled={available ? false : true}
                checked={pickState?.includes(time)}
              />
              <StyledDiv>
                <div>{available ? '모집중' : '마감'}</div>
                <div>{time}</div>
                <div>
                  {available}/{totalPeople}명
                </div>
              </StyledDiv>
            </ToggleContainer>
          ))}
        </Wrapper>
      </div>

      {pickState.length ? (
        <DataWrapper>
          {date.toLocaleDateString()} {pickState}
          <input type="number" min={1} max={3} />
        </DataWrapper>
      ) : (
        ''
      )}

      <ReservationContainer>
        <HeaderText>45,000</HeaderText>
        <Link to={`/booking/success`} style={{ textDecoration: 'none' }}>
          <ReservationButton type="button">결제하기</ReservationButton>
        </Link>
      </ReservationContainer>
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
    font-weight: bold;
  }
  &:disabled + div {
    background: #ccc;
    color: black;
    border: none;
    font-weight: bold;
  }
`;

const StyledDiv = styled.div`
  width: 19vw;
  max-width: 90px;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  color: #c4c4c4;
  border: solid 1px #c4c4c4;
  border-radius: 20px;
  display: block;
  padding: 5px 10px;
  text-align: center;
  margin: 5px;
`;

const DataWrapper = styled.div`
  margin-top: 10px;
  font-size: 25px;
  text-align: center;
`;

const HeaderText = styled(Text)`
  font-size: 25px;
  font-weight: 700;
`;

const ReservationContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 640px;
  display: flex;
  bottom: ${(props) => props.theme.height.bottomHeight};
  background-color: #aaa;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ReservationButton = styled(Button)`
  height: 56px;
  width: 174px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
`;
export default BookingPage;
