import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useHistory, useParams } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/calendar.css';
import { GoBack } from '../../components/domain';
import { Button, Text } from '../../components/base';
import { DUMMY_PRICE_DATA, Dummy_TIME_Data, DUMMY_TOTAL_PEOPLE } from './DUMMY_DATA';
import { convertFullDate } from '../../utils/functions';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { navigationState } from '../../atoms';

// <Route path="/booking/:id" exact component={BookingPage} />

const BookingPage = () => {
  const history = useHistory();
  const [date, setDate] = useState(new Date());
  const { id } = useParams<{ id: string }>();
  // state에 시간과 비어있는 인원값이 들어가야한다.
  const [pickState, setPickState] = useState<string[]>([]);
  const [people, setPeople] = useState<number>(0);
  const setNavState = useSetRecoilState(navigationState);
  const resetNavState = useResetRecoilState(navigationState);
  useEffect(() => {
    setNavState((prev) => ({
      ...prev,
      bottomNavigation: false,
    }));
    return () => {
      resetNavState();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target: string = e.target.value;
    if (!pickState?.includes(target)) {
      setPickState([target]);
    } else {
      setPickState(pickState.filter((pick: string) => pick !== target));
    }
  };

  useEffect(() => {
    setPickState([]);
  }, [date]);
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(+e.target.value);
  };
  const handleClick = () => {
    // 결제 상품, 예약 날짜, 결제 금액, 결제 날짜
    if (people && pickState.length) {
      history.push('/booking/success', {
        date: convertFullDate(date) + ' ' + ' ' + pickState[0],
        name: '도자기만들기',
        price: DUMMY_PRICE_DATA.price * people,
      });
    }
  };

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
          {Dummy_TIME_Data.map(({ time, available }) => (
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
                  {available}/{DUMMY_TOTAL_PEOPLE.maxPeople}명
                </div>
              </StyledDiv>
            </ToggleContainer>
          ))}
        </Wrapper>
      </div>

      {pickState.length ? (
        <DataWrapper>
          <div>{date.toLocaleDateString()}</div>
          <br />
          {pickState}
          <StyledInput
            type="number"
            min={1}
            max={DUMMY_TOTAL_PEOPLE.maxPeople}
            onChange={handlePeopleChange}
          />
          명
        </DataWrapper>
      ) : (
        ''
      )}

      <ReservationContainer>
        <HeaderText>{DUMMY_PRICE_DATA.price}원</HeaderText>
        <ReservationButton type="button" onClick={handleClick}>
          결제하기
        </ReservationButton>
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
  margin-top: 30px;
  font-size: 23px;
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
  bottom: 0;
  background-color: #eee;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-left: 20px;
  margin-bottom: 10px;
  border: 2px solid;
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
