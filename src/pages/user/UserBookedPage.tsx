import styled from '@emotion/styled';
import { time } from 'console';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const UserBookedPage = () => {
  const DummyData = {
    success: true,
    serverDateTime: '2021-12-05T16:50:37.436090',
    data: {
      totalCount: 3,
      pageIndex: 1,
      hasNext: true,
      reservations: [
        {
          reservationID: 1,
          name: '반지 만들기',
          date: '21/12/30',
          startTime: '13:00',
          endTime: '15:00',
          status: '진행중',
        },
        {
          reservationID: 2,
          name: '도자기 만들기',
          date: '21/11/31',
          startTime: '13:00',
          endTime: '15:00',
          status: '진행 완료',
        },
      ],
    },
  };
  const [getID, setGetID] = useState<number | undefined>(undefined);

  const history = useHistory();

  return (
    <UserBookedPageWrapper>
      <BookedLists>
        {DummyData.data.reservations.length ? (
          DummyData.data.reservations.map((item) => (
            <BookedItem key={item.reservationID}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <ProductName>{item.name}</ProductName>
                {item.status === '진행중' ? (
                  <Button
                    style={{ backgroundColor: '#b88bd6' }}
                    onClick={() => setGetID(item.reservationID)}
                  >
                    취소 하기
                  </Button>
                ) : (
                  <Button
                    style={{ backgroundColor: '#a8bac8' }}
                    onClick={() => {
                      history.push({
                        pathname: `/upload/comments/${item.reservationID}`,
                        state: {
                          reservationID: `${item.reservationID}`,
                          name: `${item.name}`,
                          date: `${item.date}`,
                          startTime: `${item.startTime}`,
                          endTime: `${item.endTime}`,
                        },
                      });
                    }}
                  >
                    후기 쓰기
                  </Button>
                )}
              </div>

              <ProductDateData>
                <ProductDate>{item.date}</ProductDate>
                <ProductDay>{}</ProductDay>
                <ProductTime>
                  {item.startTime} ~ {item.endTime}
                </ProductTime>
              </ProductDateData>
            </BookedItem>
          ))
        ) : (
          <div>예약 내역이 없습니다!</div>
        )}

        {/* <BookedItem>
          <ProductName>크리스마스 트리 만들기 클래스</ProductName>
          <ProductDateData>
            <ProductDate>2021.12.02</ProductDate>
            <ProductDay>(화)</ProductDay>
            <ProductTime>오후 3:00</ProductTime>
          </ProductDateData>
          <CancelButton>취소하기</CancelButton>
        </BookedItem>
        <BookedItem>
          <ProductName>하룻동안 방탄 되어보기</ProductName>
          <ProductDateData>
            <ProductDate>2021.12.03</ProductDate>
            <ProductDay>(수)</ProductDay>
            <ProductTime>오후 6:00</ProductTime>
          </ProductDateData>
          <ReviewButton>후기 남기기</ReviewButton>
        </BookedItem> */}
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
  padding: 30px 20px;
`;
const ProductName = styled.h4`
  font-size: 24px;
  font-weight: 600;
`;
const ProductDateData = styled.div`
  display: flex;
  justify-content: flex-start;
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
  color: #f5f5f5;
  border: none;
  padding: 0 10px;
  height: 40px;
  border-radius: 8px;
`;

export default UserBookedPage;
