import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ChevronLeft } from 'react-feather';
import { Link, useLocation, useParams } from 'react-router-dom';
import { GoBack } from '../../components/domain';
import { useForm } from '../../hooks';
const CommentsPage = () => {
  // 추후에 하단 NAV없애야 함
  const postInfo: any = useLocation();

  const { isLoading, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      comment: '',
    },
    onSubmit: async (values) => {
      //await cccc
    },
    validate: ({ comment }) => {
      const errors = {} as any;
      if (!comment) errors.content = '내용을 입려해 주세요';

      return errors;
    },
  });
  const DUMMY_DATA = {
    data: {
      hasNext: true,
      pageIndex: 0,
      pageSize: 10,
      comment: [
        {
          content: '우와짱이네요',
          createdAt: '2021-12-10 19:23:00',
          member: {
            name: '나손님',
            imageUrl:
              'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
          },
        },
        {
          content: '우와킹이네요',
          createdAt: '2021-12-10 19:24:12',
          member: {
            name: '너손님',
            imageUrl:
              'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf8f324a0b9c48f77dbce3a43bd11ce785',
          },
        },
      ],
      success: true,
      serverDateTime: '2021-12-14 20:21:45',
    },
  };

  return (
    <CommentsWrapper>
      <GoBack to={'/feed'}>돌아가기</GoBack>

      <CommentsTopWrapper>
        <CommentsAuthorAvatar>
          <CommentsAuthorImg />
          <CommentsAuthorName>{postInfo?.authorName}</CommentsAuthorName>
        </CommentsAuthorAvatar>
        <CommentsTime>3시간 전</CommentsTime>
      </CommentsTopWrapper>
      <CommentsContents>
        가나다라마바사아자차카타파하아아아하하하후후후가나다라마바사아자차카타파하아아아하하하후후후
      </CommentsContents>

      <CommentsListsWrapper>
        {DUMMY_DATA.data.comment.length ? (
          DUMMY_DATA.data.comment.map((item, i) => (
            <CommentsItemWrapper key={i}>
              <CommentsCommentor>
                <CommentsCommentorImg src={item.member.imageUrl} />
                <CommentsCommentorName>{item.member.name}</CommentsCommentorName>
                <CommentsCommentorContents>{item.content}</CommentsCommentorContents>
                <CommentsCreated>{item.createdAt.split(' ')[0]}</CommentsCreated>
              </CommentsCommentor>
            </CommentsItemWrapper>
          ))
        ) : (
          <div>댓글이 없습니다</div>
        )}
      </CommentsListsWrapper>
      <NewCommentsWrapper onSubmit={handleSubmit}>
        <NewCommentsInput
          placeholder={'댓글을 입력해 주세요'}
          name="comment"
          onChange={handleChange}
        />
        <NewCommnetsSubmit type="submit">게시</NewCommnetsSubmit>
      </NewCommentsWrapper>
    </CommentsWrapper>
  );
};
const CommentsWrapper = styled.section`
  position: relative;
`;
const CommentsBackButton = styled.div`
  position: fix;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  color: black;
`;
const CommentsBackButtonText = styled.div`
  font-size: 20px;
  margin-left: calc(50% - 70px);
`;
const CommentsTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  align-items: center;
`;
const CommentsAuthorAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const CommentsAuthorImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: grey;
`;
const CommentsAuthorName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
`;
const CommentsTime = styled.div`
  font-size: 20px;
`;
const CommentsContents = styled.div`
  font-size: 20px;
  margin: 0 20px 20px 20px;
`;
const CommentsListsWrapper = styled.ul`
  height: calc(100vh - 300px);
  overflow: scroll;
  border-top: solid 1px #c5c5c5;
`;
const CommentsItemWrapper = styled.li`
  margin: 20px;
`;
const CommentsCommentor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const CommentsCommentorImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey;
  margin-right: 10px;
`;
const CommentsCommentorName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;
const CommentsCommentorContents = styled.div`
  font-size: 20px;
`;
const CommentsCreated = styled.div`
  font-size: 16px;
  color: #c4c4c4;
  margin-left: 10px;
`;
const NewCommentsWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;
const NewCommentsInput = styled.input`
  width: calc(100% - 40px);
  height: 50px;
  background-color: transparent;
  border-radius: 16px;
  font-size: 20px;
  border: solid 1px #c4c4c4;
  padding-left: 10px;
`;
const NewCommnetsSubmit = styled.button`
  position: absolute;
  right: 20px;
  background: transparent;
  border: none;
  color: #b88bd6;
  font-size: 20px;
  font-weight: 600;
`;
export default CommentsPage;
