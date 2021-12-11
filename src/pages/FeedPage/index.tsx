import styled from '@emotion/styled';
import React, { Component } from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import './flicker.css';

const FeedPage = () => {
  const DUMMY_DATA = {
    data: {
      post: [
        {
          postId: 1,
          content: '오늘도 나는 춤을 춘ㄷr..',
          createdAt: '2021-12-11',
          images: [
            {
              imageUrl:
                'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf8f324a0b9c48f77dbce3a43bd11ce785',
              sequence: 1,
            },
            {
              imageUrl:
                'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
              sequence: 2,
            },
            {
              imageUrl:
                'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933bafa88f7b2cbb72be0bdfff91ad65b168ab',
              sequence: 3,
            },
          ],
          classId: 1,
          atelierId: 1,
          name: '방탄공방',
          imageUrl:
            'https://item.kakaocdn.net/do/a1866850b14ae47d0a2fd61f409dfc057154249a3890514a43687a85e6b6cc82',
        },
        {
          postId: 2,
          content: '도자기가 꺠져서 나왔다 :(',
          createdAt: '2021-12-10',
          images: [
            {
              imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdC_mryUxAP08dKKwSw9_Xz1x8PC4g1uM6FQ&usqp=CAU',
              sequence: 1,
            },
          ],
          classId: 2,
          atelierId: 2,
          name: '뽀드득',
          imageUrl:
            'https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp',
        },
        {
          postId: 3,
          content: '아니 이런 선물이 있다니!',
          createdAt: '2021-12-09',
          images: [
            {
              imageUrl:
                'https://img.huffingtonpost.com/asset/5ddccb122500009927d2e337.jpeg?cache=GqM9tE6Yr9&ops=1200_630',
              sequence: 1,
            },
            {
              imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcY-zc00qWPKGP32Isb1BDOvxyFK53G-M24uCRUzD_ZT8h_d9VhfYTqMog7ixWYWwY1w&usqp=CAU',
              sequence: 1,
            },
            {
              imageUrl:
                'https://img.huffingtonpost.com/asset/5ddccb122500009927d2e337.jpeg?cache=GqM9tE6Yr9&ops=1200_630',
              sequence: 1,
            },
          ],
          classId: 3,
          atelierId: 3,
          name: 'team DAYZ',
          imageUrl:
            'data:image/jpeg;base64,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',
        },
      ],
    },
    success: true,
    serverDateTime: '2021-12-20 10:07:01',
  };

  return (
    <FeedPageWrapper>
      {DUMMY_DATA.data.post.length ? (
        DUMMY_DATA.data.post.map((item) => (
          <FeedItem key={item.postId}>
            <FeedTopWrapper>
              <FeedAvatar>
                <Link to={`/workshop/${item.atelierId}`}>
                  <FeedAvatarImg src={item.imageUrl} />
                </Link>
                <FeedAvatarName>{item.name}</FeedAvatarName>
              </FeedAvatar>
              <FeedTime>{item.createdAt}</FeedTime>
            </FeedTopWrapper>
            <FeedContentWrapper>
              <FeedImgWrapper>
                <Flicking
                  align="prev"
                  circular={false}
                  plugins={[new Pagination({ type: 'bullet' })]}
                >
                  {item.images?.map((img) => (
                    <FeedContentImg key={`${item.name}` + `${img.sequence}`} src={img.imageUrl} />
                  ))}
                  <ViewportSlot>
                    {item.images.length > 1 ? (
                      <div className="flicking-pagination" />
                    ) : (
                      <div className="flicking-pagination" style={{ display: 'none' }} />
                    )}
                  </ViewportSlot>
                </Flicking>

                {/* <Dots images={item.images} index={2} /> */}
              </FeedImgWrapper>

              <Link to={`/products/${item.classId}`} style={{ textDecoration: 'none' }}>
                <FeedContentClassWrapper>
                  <FeedContentClassText>클래스 보러가기</FeedContentClassText>
                  <ChevronRight size={30} style={{ marginRight: '10px' }} />
                </FeedContentClassWrapper>
              </Link>
              <FeedContentText>
                <FeedContentTextUser>{item.name}</FeedContentTextUser>
                <FeedContentTextTitle>{item.content}</FeedContentTextTitle>
              </FeedContentText>
            </FeedContentWrapper>
            <Link to="/feed/comments/:id" style={{ textDecoration: 'none' }}>
              <FeedComment>댓글 더 보기</FeedComment>
            </Link>
          </FeedItem>
        ))
      ) : (
        <div>팔로우한 계정이 없네요!</div>
      )}
      {/* // <FeedItem>
      //   <FeedTopWrapper>
      //     <FeedAvatar>
      //       <Link to="/workshop/:id">
      //         <FeedAvatarImg />
      //       </Link>
      //       <FeedAvatarName>희진공방</FeedAvatarName>
      //     </FeedAvatar>
      //     <FeedTime>3시간전</FeedTime>
      //   </FeedTopWrapper>
      //   <FeedContentWrapper>
      //     <FeedContentImg />
      //     <Link to="/products/:id" style={{ textDecoration: 'none' }}>
      //       <FeedContentClassWrapper>
      //         <FeedContentClassText>클래스 보러가기</FeedContentClassText>
      //         <ChevronRight size={30} style={{ marginRight: '10px' }} />
      //       </FeedContentClassWrapper>
      //     </Link>
      //     <FeedContentText>
      //       <FeedContentTextUser>희진공방</FeedContentTextUser>
      //       <FeedContentTextTitle>오늘도 힘차게 화이팅~</FeedContentTextTitle>
      //     </FeedContentText>
      //   </FeedContentWrapper>
      //   <Link to="/feed/comments/:id" style={{ textDecoration: 'none' }}>
      //     <FeedComment>댓글 더 보기</FeedComment>
      //   </Link>
      // </FeedItem> */}
    </FeedPageWrapper>
  );
};

const FeedPageWrapper = styled.section`
  width: 100%;
`;
const FeedItem = styled.div``;
const FeedTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
`;
const FeedTime = styled.div`
  font-size: 20px;
  color: grey;
`;
const FeedAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const FeedAvatarImg = styled.img`
  background-color: grey;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const FeedAvatarName = styled.div`
  margin-left: 20px;
  font-size: 20px;
  color: black;
`;
const FeedContentWrapper = styled.div``;
const FeedImgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  position: relative;
  & {
    -ms-overflow-style: none; //IE
    scrollbar-width: none; //firefox
  }
  &::-webkit-scrollbar {
    display: none; // chrome
  }
`;
const FeedContentImg = styled.img`
  width: 100%;
  z-index: 10;
`;
const FeedContentClassWrapper = styled.div`
  width: 100%;
  height: 45px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f5f5f5;
`;
const FeedContentClassText = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-left: 20px;
  line-height: 60px;
  text-align: start;
`;
const FeedContentText = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;
const FeedContentTextUser = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
const FeedContentTextTitle = styled.div`
  margin-left: 20px;
  font-size: 20px;
  color: black;
`;
const FeedComment = styled.div`
  margin-left: 20px;
  margin-top: 5px;
  font-size: 20px;
  color: grey;
`;

export default FeedPage;
