import styled from '@emotion/styled';
import React from 'react';
const Comments = () => {
  return (
    <CommentsWrapper>
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
      <CommentsItemWrapper>
        <CommentsCommentor>
          <CommentsCommentorImg />
          <CommentsCommentorName>임효성</CommentsCommentorName>
          <CommentsCommentorContents>와 좋아요</CommentsCommentorContents>
        </CommentsCommentor>
      </CommentsItemWrapper>
    </CommentsWrapper>
  );
};
const CommentsWrapper = styled.section`
  overflow: scroll;
  width: 100%;
  height: calc(100vh - 190px);
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
  margin: 0 20px;
  border-bottom: solid 1px #c4c4c4;
`;
const CommentsItemWrapper = styled.div`
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

export default Comments;
