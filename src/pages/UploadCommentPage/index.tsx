import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useParams } from 'react-router';
import { Button, Image, Text, Upload } from '../../components/base';
import { useForm } from '../../hooks';
import { Rating } from 'react-simple-star-rating';
import { LinkBox } from '../../components/domain';
import { Plus } from 'react-feather';

const UploadCommentPage = () => {
  const [rating, setRating] = useState(0);
  const [imgLink, setImgLink] = useState<string | undefined>(undefined);
  const { id } = useParams<{ id: string }>(); //reservationID

  // const onSubmitReview = (value: object) => {
  //   // 제출하는 함수

  // };

  const reviewInfo: any = useLocation().state;
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

  const handleRating = (rate: number) => {
    setRating(rate);
    console.log(rating / 20);
    // https://github.com/awran5/react-simple-star-rating
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {/* <div>{id} 후기 남기기 페이지</div> */}
      <ClassNameWrapper>
        <LinkBox style={{ width: '80%' }}>
          <div>{reviewInfo?.name}</div>
          <div>{reviewInfo?.date}</div>
          <div>
            {reviewInfo?.startTime} ~ {reviewInfo?.endTime}
          </div>
        </LinkBox>
      </ClassNameWrapper>

      <ReviewStarWrapper>
        <StyledText>강의가 만족스러우셨나요?</StyledText>
        <div>
          <Rating onClick={handleRating} ratingValue={rating} size={60} allowHover={false} />
        </div>
      </ReviewStarWrapper>

      <ReviewContentsWrapper>
        <StyledText>후기를 남겨주세요!</StyledText>
        <StyledInput name="review" />
        <StyledText>사진도 남겨주세요!</StyledText>
        <Upload droppable accept="image/*" imgLink={imgLink} setImgLink={setImgLink}>
          {(file: File, dragging: React.DragEvent<HTMLDivElement>) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: '10px',
                  overflowX: 'scroll',
                }}
              >
                {file ? <img src={imgLink} style={{ width: '200px', paddingRight: '20px' }} /> : ''}

                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <Plus style={{ color: '#f5f5f5' }} size={40} />
                </div>
              </div>
            );
          }}
        </Upload>
      </ReviewContentsWrapper>

      <Button
        type="submit"
        style={{
          width: '150px',
          height: '60px',
          fontSize: '20px',
          color: '#f5f5f5',
          fontWeight: '600',
          borderRadius: '8px',
          marginLeft: 'calc(50% - 75px)',
        }}
      >
        후기 남기기
      </Button>
    </FormContainer>
  );
};
const FormContainer = styled.form`
  margin-top: 40px;
`;

const ClassNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReviewStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;

const ReviewContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;
const StyledInput = styled.textarea`
  width: 80%;
  height: 200px;
  font-size: 20px;
  border-radius: 8px;
  border: solid 1px #c4c4c4;
  margin-bottom: 20px;
`;
const StyledText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
`;
export default UploadCommentPage;
