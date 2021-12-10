import React from 'react';
import styled from '@emotion/styled';
import { Star } from 'react-feather';
import { Avatar, Image } from '../../components/base';
import { DUMMY_REVIEW_DATA } from './DUMMY_DATA';
// 1. 전체 리뷰 가져오기 https://backend-devcourse.notion.site/cbf7db08c6ae437b904d594dc92a8219

const ReviewListPage = () => {
  return (
    <>
      <StarContainer>
        <Star size={36} />
        {DummyData.data ? <span>{DummyData.data.averageScore}</span> : ''}
      </StarContainer>
      <section>
        <ReviewContainer>
          <AteliarWrapper>
            <Avatar
              lazy
              src={'https://via.placeholder.com/150'}
              shape="circle"
              size={70}
              alt="profile"
              placeholder="https://via.placeholder.com/150"
            />
            <AteliarDetailWrapper>
              <div>사용자 123</div>
              <div>2020-05-23</div>
            </AteliarDetailWrapper>
          </AteliarWrapper>
          <ContentWrapper>
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          </ContentWrapper>
          <ImageContainer>
            <ImageWrapper>
              <Image
                lazy
                src="https://via.placeholder.com/150"
                width={'100%'}
                height={'100%'}
                alt="contents"
                mode="fill"
                style={{ borderRadius: '12px', minWidth: '120px' }}
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                lazy
                src="https://via.placeholder.com/150"
                width={'100%'}
                height={'100%'}
                alt="contents"
                mode="fill"
                style={{ borderRadius: '12px', minWidth: '120px' }}
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                lazy
                src="https://via.placeholder.com/150"
                width={'100%'}
                height={'100%'}
                alt="contents"
                mode="fill"
                style={{ borderRadius: '12px', minWidth: '120px' }}
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                lazy
                src="https://via.placeholder.com/150"
                width={'100%'}
                height={'100%'}
                alt="contents"
                mode="fill"
                style={{ borderRadius: '12px', minWidth: '120px' }}
              />
            </ImageWrapper>
          </ImageContainer>
        </ReviewContainer>
      </section>
    </>
  );
};
export default ReviewListPage;

const StarContainer = styled.div`
  margin: 24px 36px;
  display: flex;
  align-items: center;
  font-size: 36px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const AteliarWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const AteliarDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const ContentWrapper = styled.div`
  margin: 20px 0;
  box-sizing: border-box;
  padding: 0 20px;
`;
const ImageContainer = styled.div`
  display: flex;
  height: 120px;
  overflow-x: auto;
  box-sizing: border-box;
  padding: 0 20px;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  margin-right: 10px;
`;

// const ReviewContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-top: 1px solid black;
//   & .review {
//     margin: 24px;
//     & .profile {
//       display: flex;
//       align-items: center;
//       & img {
//         width: 60px;
//         height: 60px;
//         border-radius: 30px;
//         margin-right: 12px;
//       }
//     }
//     & .content {
//       font-size: 24px;
//       margin: 12px 0;
//     }
//     & .photos {
//       & img {
//         width: 100px;
//         height: 100px;
//         border-radius: 12px;
//         margin-right: 12px;
//       }
//     }
//   }
// `;
