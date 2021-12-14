import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useParams } from 'react-router';
import { Button, Text, Rating } from '../../components/base';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LinkBox } from '../../components/domain';
import { Plus } from 'react-feather';
import { setImageUpload } from '../../utils/api/dayzApi';

type Input = {
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
  } = useForm<Input>();

  const onSubmit: SubmitHandler<any> = (data: Input) => {
    // data랑 imgSrcArray랑, rate를 같이 보내야함.
    console.log(imgSrcArray);
    console.log(data);
    console.log(rate);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const image = e.target.files[0];
      console.log(image);
      const { status, data } = await setImageUpload(image);
      if (status === 200) {
        setImgSrcArray((prev) => [...prev, data.payload.imageUrl]);
      }
    }
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
        <UploadContainer>
          <Input type="file" accept="image/*" id="addImage" onChange={handleChange} />
          <ImageWrapper>
            {imgSrcArray.length
              ? imgSrcArray.map((something, index) => (
                  <img
                    key={index}
                    src={something}
                    style={{ width: '200px', paddingRight: '20px' }}
                  />
                ))
              : ''}
            <label
              htmlFor="addImage"
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
              <Plus style={{ color: '#f5f5f5', cursor: 'pointer' }} size={40} />
            </label>
          </ImageWrapper>
        </UploadContainer>
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
const UploadContainer = styled.div`
  width: 100%;
  display: inline-block;
`;
const Input = styled.input`
  display: none;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default UploadCommentPage;
