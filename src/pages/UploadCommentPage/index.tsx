import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';
import { Button, Image, Text } from '../../components/base';
import { useForm } from '../../hooks';

const UploadCommentPage = () => {
  const { id } = useParams<{ id: string }>();

  // const onSubmitReview = (value: object) => {
  //   // 제출하는 함수
  // };

  const { values, errors, isLoading, handleChange, handleSubmit, setValues } = useForm({
    initialValues: {
      star: '',
      content: '',
    },
    onSubmit: async (value) => {
      // await onSubmitReview(value);
    },
    validate: ({ star, content }) => {
      const errors = {} as any;
      if (!star) errors.star = '별점을 체크해주세요.';
      if (!content) errors.content = '후기를 남겨주세요';
      return errors;
    },
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>{id} 후기 남기기 페이지</div>
      <ClassNameWrapper>
        <Image
          src={'http://www.madtimes.org/news/photo/201909/3015_5297_2620.jpg'}
          width={200}
          height={200}
          alt={'사진'}
          mode={'fill'}
        />
        <div>
          <div>희진 클래수</div>
          <div>세상에 모든 것들을 만들려고 합니다!!</div>
        </div>
      </ClassNameWrapper>

      <ReviewStarWrapper>
        <StyledText>강의가 만족스러우셨나요?</StyledText>
        <div>1점부터 5점까지! 별점 컴포넌트 만들기!?</div>
      </ReviewStarWrapper>

      <ReviewContentsWrapper>
        <StyledText>후기를 남겨주세요!</StyledText>
        <StyledInput type="text" onChange={handleChange} />
      </ReviewContentsWrapper>
      <StyledButton type="submit">후기 남기기!</StyledButton>
    </FormContainer>
  );
};
const FormContainer = styled.form``;

const ClassNameWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;
const ReviewStarWrapper = styled.div`
  margin: 20px 0;
`;

const ReviewContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const StyledInput = styled.input`
  width: 80%;
  height: 1000px;
  font-size: 20px;
`;
const StyledText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
`;
export default UploadCommentPage;
