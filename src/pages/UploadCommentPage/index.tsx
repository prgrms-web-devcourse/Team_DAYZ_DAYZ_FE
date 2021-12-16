import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useParams } from 'react-router';
import { Button, Text, Rating } from '../../components/base';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomImageUpload, LinkBox } from '../../components/domain';

type InputData = {
  content: string;
};

const UploadCommentPage = () => {
  const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);
  const [rate, setRate] = useState<number | undefined>(0);
  const reviewInfo: any = useLocation().state;
  const { id } = useParams<{ id: string }>(); //reservationID

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>();

  const onSubmit: SubmitHandler<any> = (data: InputData) => {
    // data랑 imgSrcArray랑, rate를 같이 보내야함.
    console.log(imgSrcArray);
    console.log(data);
    console.log(rate);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
          {/* <Rating onClick={handleRating} ratingValue={rating} size={60} allowHover={false} /> */}
          <Rating setRate={setRate} />
        </div>
      </ReviewStarWrapper>

      <ReviewContentsWrapper>
        <StyledText>후기를 남겨주세요!</StyledText>
        <StyledInput {...register('content', { required: true })} />
        {errors.content && <div>후기를 작성해주세요!</div>}

        <StyledText>사진을 남겨주세요!</StyledText>
        <CustomImageUpload imgSrcArray={imgSrcArray} setImgSrcArray={setImgSrcArray} />
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
          marginBottom: '40px',
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

export default UploadCommentPage;
