import styled from '@emotion/styled';
import { time } from 'console';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import { getBookingData } from '../../utils/api/dayzApi';

type Booking = {
  classDate: string;
  className: string;
  endTime: string;
  reservationDate: string;
  reservationId: number;
  startTime: string;
  status: string;
};

interface Data {
  hasNext: boolean;
  list: Booking[];
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}

const UserBookedPage = () => {
  const user = useRecoilValue(userState);
  const [getID, setGetID] = useState<number | undefined>(undefined);
  const [bookingData, setBookingData] = useState<any>({});
  const getAsyncBookingData = useCallback(async () => {
    const response = await getBookingData({ token: user.token });
    if (response.status === 200) {
      setBookingData({ ...response.data.data });
    }
  }, [user]);
  const history = useHistory();
  useEffect(() => {
    getAsyncBookingData();
  }, [getAsyncBookingData]);

  return (
    <UserBookedPageWrapper>
      <BookedLists>
        {bookingData.list ? (
          bookingData.list.map(
            ({
              reservationId,
              startTime,
              endTime,
              classDate,
              className,
              status,
              reservationDate,
            }: Booking) => (
              <BookedItem key={reservationId}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <ProductName>{className}</ProductName>
                  {status === 'ACCEPT' ? (
                    <Button
                      style={{ backgroundColor: '#b88bd6' }}
                      onClick={() => setGetID(reservationId)}
                    >
                      취소 하기
                    </Button>
                  ) : (
                    <Button
                      style={{ backgroundColor: '#a8bac8' }}
                      onClick={() => {
                        history.push({
                          pathname: `/upload/comments/${reservationId}`,
                          state: {
                            reservationID: `${reservationId}`,
                            name: `${className}`,
                            date: `${reservationDate}`,
                            startTime: `${startTime}`,
                            endTime: `${endTime}`,
                          },
                        });
                      }}
                    >
                      후기 쓰기
                    </Button>
                  )}
                </div>

                <ProductDateData>
                  {/* <ProductDate>{classDate}</ProductDate> */}
                  <ProductDay>{reservationDate}</ProductDay>
                  <ProductTime>
                    {startTime} ~ {endTime}
                  </ProductTime>
                </ProductDateData>
              </BookedItem>
            ),
          )
        ) : (
          <div>예약 내역이 없습니다!</div>
        )}
      </BookedLists>
    </UserBookedPageWrapper>
  );
};
const UserBookedPageWrapper = styled.section``;
const BookedLists = styled.ul``;
const BookedItem = styled.li`
  border: solid 1px #c4c4c4;
  border-radius: 16px;
  margin: 20px;
  padding: 20px 20px;
  height: 130px;
  box-sizing: border-box;
`;
const ProductName = styled.h4`
  font-size: 24px;
  font-weight: 600;
  max-width: 220px;
`;
const ProductDateData = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  margin-top: 10px;
`;
const ProductDate = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;
const ProductDay = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;
const ProductTime = styled.div`
  font-size: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  width: 108px;
  color: #f5f5f5;
  border: none;
  padding: 0 10px;
  height: 40px;
  border-radius: 8px;
`;

export default UserBookedPage;
