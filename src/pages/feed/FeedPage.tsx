import React from 'react';
import styled from '@emotion/styled';
import { ChevronRight } from 'react-feather';
import { Link, useHistory } from 'react-router-dom';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import '../../style/flicker.css';
import { useEffect } from 'react';
import { fetchFeedContents } from '../../utils/api/dayzApi';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import { useState } from 'react';
import Loader from 'react-loader-spinner';

interface IImages {
  imageUrl: string;
  createdAt: string;
}

interface AtelierResult {
  atelierId: number;
  imageUrl: string;
  name: string;
}

interface IList {
  atelierResult: AtelierResult;
  content: string;
  createdAt: string;
  images: IImages[];
  oneDayClassId: number;
  postId: number;
}

interface FeedProps {
  hasNext: boolean;
  list: IList[];
}

const FeedPage = () => {
  const history = useHistory();
  const { token } = useRecoilValue(userState);
  const [feedData, setFeedData] = useState<FeedProps>();
  const [isLoading, setIsLoading] = useState(feedData == null);

  useEffect(() => {
    fetchFeedContents(token)
      .then((res) => setFeedData(res.data.data))
      .then(() => setIsLoading(false));
  }, []);
  return isLoading ? (
    <LoaderContainer>
      <Loader type="Oval" color="#B88BD6" height={80} width={80} />
    </LoaderContainer>
  ) : (
    <FeedPageWrapper>
      {feedData?.list?.length ? (
        feedData.list.map((item) => (
          <FeedItem key={item.postId}>
            <FeedTopWrapper>
              <FeedAvatar>
                <Link to={`/workshop/${item.oneDayClassId}`}>
                  <FeedAvatarImg src={item.atelierResult.imageUrl} />
                </Link>
                <FeedAvatarName>{item.atelierResult.name}</FeedAvatarName>
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
                  {item.images.map((img) => (
                    <FeedContentImg key={img.imageUrl} src={img.imageUrl} />
                  ))}
                  <ViewportSlot>
                    {+item.images > 1 ? (
                      <div className="flicking-pagination" />
                    ) : (
                      <div className="flicking-pagination" style={{ display: 'none' }} />
                    )}
                  </ViewportSlot>
                </Flicking>
              </FeedImgWrapper>

              <Link to={`/products/${item.oneDayClassId}`} style={{ textDecoration: 'none' }}>
                <FeedContentClassWrapper>
                  <FeedContentClassText>클래스 보러가기</FeedContentClassText>
                  <ChevronRight size={30} style={{ marginRight: '10px' }} />
                </FeedContentClassWrapper>
              </Link>
              <FeedContentText>
                <FeedContentTextTitle>{item.content}</FeedContentTextTitle>
              </FeedContentText>
            </FeedContentWrapper>
            <FeedComment
              onClick={() => {
                history.push({
                  pathname: `/feed/comments/${item.postId}`,
                  state: {
                    postId: `${item.postId}`,
                    authorName: `${item.atelierResult.name}`,
                    createdAt: `${item.createdAt}`,
                    authorImg: `${item.atelierResult.imageUrl}`,
                    content: `${item.content}`,
                  },
                });
              }}
            >
              댓글 더 보기
            </FeedComment>
          </FeedItem>
        ))
      ) : (
        <div>팔로우한 계정이 없네요!</div>
      )}
    </FeedPageWrapper>
  );
};

const FeedPageWrapper = styled.section`
  width: 100%;
`;
const FeedItem = styled.div`
  margin: 15px 0;
`;
const FeedTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
const FeedTime = styled.div`
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
  margin-left: 10px;
  font-weight: 600;
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
  height: 350px;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
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
  font-weight: 600;
  padding-left: 15px;
  line-height: 60px;
  text-align: start;
`;
const FeedContentText = styled.div`
  margin: 15px;
`;
const FeedContentTextTitle = styled.div`
  color: black;
`;
const FeedComment = styled.span`
  margin-left: 15px;
  margin-top: 5px;
  color: grey;
  cursor: pointer;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default FeedPage;
