import React from 'react';
import { useParams } from 'react-router';

const LeaveCommentPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      {id} 후기 남기기 페이지
      <div>리뷰 남기는 페이지</div>
    </>
  );
};

export default LeaveCommentPage;
