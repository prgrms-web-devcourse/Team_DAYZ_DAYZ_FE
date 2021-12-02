import styled from '@emotion/styled';
import React from 'react';
import { ChevronLeft } from 'react-feather';
const Comments = () => {
  // 추후에 하단 NAV없애야 함
  return (
    <CommentsWrapper>
      <CommentsBackButton>
        <ChevronLeft size={40} />
        <CommentsBackButtonText>돌아가기</CommentsBackButtonText>
      </CommentsBackButton>

      <CommentsTopWrapper>
        <CommentsAuthorAvatar>
          <CommentsAuthorImg />
          <CommentsAuthorName>희진 공방</CommentsAuthorName>
        </CommentsAuthorAvatar>
        <CommentsTime>3시간 전</CommentsTime>
      </CommentsTopWrapper>
      <CommentsContents>
        가나다라마바사아자차카타파하아아아하하하후후후가나다라마바사아자차카타파하아아아하하하후후후
      </CommentsContents>

      <CommentsListsWrapper>
        <CommentsItemWrapper>
          <CommentsCommentor>
            <CommentsCommentorImg />
            <CommentsCommentorName>임효성</CommentsCommentorName>
            <CommentsCommentorContents>와 좋아요</CommentsCommentorContents>
          </CommentsCommentor>
        </CommentsItemWrapper>
      </CommentsListsWrapper>
      <NewCommentsWrapper>
        <NewCommentsInput placeholder={'댓글을 입력해 주세요'} />
        <NewCommnetsSubmit>게시</NewCommnetsSubmit>
      </NewCommentsWrapper>
    </CommentsWrapper>
  );
};
const CommentsWrapper = styled.section`
  overflow: scroll;
  width: 100%;
  height: 100vh;
  position: relative;
`;
const CommentsBackButton = styled.div`
  position: fix;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
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
const CommentsCommentorImg = styled.div`
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
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  color: #b88bd6;
  font-size: 20px;
  font-weight: 600;
`;
export default Comments;
