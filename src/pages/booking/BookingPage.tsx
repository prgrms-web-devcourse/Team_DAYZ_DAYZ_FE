import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/calendar.css';
import { GoBack } from '../../components/domain';
import { Button, Text } from '../../components/base';
import { convertFullDate } from '../../utils/functions';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { navigationState, userState } from '../../atoms';
import { getClassTimes, setReservations } from '../../utils/api/dayzApi';

interface ClassTimes {
  classTimeId: number;
  currentPeopleNumber: number;
  endTime: string;
  startTime: string;
  status: boolean;
}
interface StateTypes {
  name: string;
  maxPeopleNumber: number;
  price: number;
}

const BookingPage = () => {
  const history = useHistory();
  const location = useLocation();
  const state = location.state as StateTypes;
  const [date, setDate] = useState(new Date());
  const { id } = useParams<{ id: string }>();
  const [classTimes, setClassTimes] = useState<any>([]);
  const [pickState, setPickState] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number>(0);
  const user = useRecoilValue(userState);
  const setNavState = useSetRecoilState(navigationState);
  const resetNavState = useResetRecoilState(navigationState);
  useEffect(() => {
    // if (!state) {
    //   history.replace('/');
    // }
    setNavState((prev) => ({
      ...prev,
      bottomNavigation: false,
    }));
    return () => {
      resetNavState();
    };
  }, []);
  const getAsyncClasstimes = useCallback(async () => {
    const response = await getClassTimes({
      token: user.token,
      classId: +id,
      date: convertFullDate(date),
    });
    if (response.status === 200) {
      setClassTimes([...response.data.data.classTimes]);
    }
  }, [date]);
  useEffect(() => {
    getAsyncClasstimes();
    setPickState(0);
  }, [getAsyncClasstimes]);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target: number = e.target.value;
    setPickState(target);
    console.log(e.target);
    console.log(classTimes);
  };
  // const filters = () => {
  //   const a = classTimes.filter((class: ClassTimes) => class.classTimeId == pickState)
  // };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(+e.target.value);
  };
  const handleClick = async () => {
    // 결제 상품, 예약 날짜, 결제 금액, 결제 날짜
    if (people && pickState) {
      const response = await setReservations({
        token: user.token,
        price: state.price,
        peopleNumber: people,
        classTimeId: pickState,
      });
      // console.log(response);

      history.push('/booking/success', {
        date: convertFullDate(date),
        name: state.name,
        price: state.price * people,
        classId: pickState,
      });
    }
  };

  return (
    <>
      <GoBack to={`/products/${id}`}>이전</GoBack>
      <div>
        <ReactDatePicker
          selected={date}
          onChange={(date: Date) => setDate(date)}
          inline
          minDate={new Date()}
        />
        <Wrapper onChange={handleChange}>
          {classTimes.map(
            ({ classTimeId, currentPeopleNumber, endTime, startTime }: ClassTimes) => (
              <ToggleContainer key={classTimeId}>
                <Input
                  type="checkbox"
                  value={classTimeId}
                  // disabled={available ? false : true}
                  checked={pickState == classTimeId}
                />
                <StyledDiv>
                  <div>모집중 </div>
                  <div>
                    {startTime} - {endTime}
                  </div>
                  <div>
                    {state.maxPeopleNumber - currentPeopleNumber}/{state.maxPeopleNumber}명
                  </div>
                </StyledDiv>
              </ToggleContainer>
            ),
          )}
        </Wrapper>
      </div>

      {pickState ? (
        <DataWrapper>
          {date.toLocaleDateString()}
          <StyledInput
            type="number"
            min={1}
            max={state.maxPeopleNumber}
            onChange={handlePeopleChange}
          />
          명
        </DataWrapper>
      ) : (
        ''
      )}

      <ReservationContainer>
        <HeaderText>{state.price * (people ? people : 1)}원</HeaderText>
        <ReservationButton type="button" onClick={handleClick}>
          결제하기
        </ReservationButton>
      </ReservationContainer>
    </>
  );
};
const Wrapper = styled.form`
  display: flex;
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
  width: 25vw;
  max-width: 130px;
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
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-top: 1px solid #c4c4c4;
  padding: 10px 0;
  background-color: #ffffff;
`;

const StyledInput = styled.input`
  border: 2px solid;
  border-radius: 8px;
  padding: 5px 10px;
  margin-left: 12px;
`;

const ReservationButton = styled(Button)`
  height: 56px;
  width: 174px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #f5f5f5;
`;
export default BookingPage;
