import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Button, Text, Rating } from '../../components/base';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomImageUpload, ErrorMessage, LinkBox } from '../../components/domain';
import { convertImageArray } from '../../utils/functions';

type InputData = {
  content: string;
};

/* 
  {
		"reservationId":1
	  "title":"아주 재밌어용",
	  "content": "시간 가는줄 몰랐네요",
		"score": 5
    "images": [
        {
        "imageUrl": "s3://devrun-image/KakaoTalk_20210616_220854417.jpg",
         "sequence": 1,
         },
        {
        "imageUrl": "s3://devrun-image/KakaoTalk_20210616_220854417.jpg",
         "sequence": 1,
        }
      ]
}
*/

const UploadCommentPage = () => {
  const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);
  const [score, setScore] = useState<number | undefined>(0);
  const { state }: any = useLocation();
  const { id } = useParams<{ id: string }>(); //reservationID
  const history = useHistory();

  // useEffect(() => { // state가 없으면 뒤로가기 처리
  //   if (!state) {
  //     history.goBack();
  //   }
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>();

  const onSubmit: SubmitHandler<any> = (formData: InputData) => {
    if (score && imgSrcArray.length) {
      const data = {
        // reservationId,
        content: formData.content,
        score,
        images: convertImageArray(imgSrcArray),
      };
      console.log('data : ', data);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <ClassNameWrapper>
        <LinkBox style={{ width: '80%' }}>
          <div>{state?.name}</div>
          <div>{state?.date}</div>
          <div>
            {state?.startTime} ~ {state?.endTime}
          </div>
        </LinkBox>
      </ClassNameWrapper>

      <ReviewStarWrapper>
        <StyledText>강의가 만족스러우셨나요?</StyledText>
        <div>
          <Rating setRate={setScore} />
        </div>
      </ReviewStarWrapper>

      <ReviewContentsWrapper>
        <StyledText>후기를 남겨주세요!</StyledText>
        <StyledInput {...register('content', { required: true })} />
        {errors.content && <ErrorMessage>후기를 작성해주세요!</ErrorMessage>}

        <StyledText>사진을 남겨주세요!</StyledText>
        <CustomImageUpload imgSrcArray={imgSrcArray} setImgSrcArray={setImgSrcArray} />
      </ReviewContentsWrapper>

      <StyledButton type="submit">후기 남기기</StyledButton>
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
  width: 150px;
  height: 60px;
  font-size: 20px;
  color: #f5f5f5;
  font-weight: 600;
  border-radius: 8px;
  margin-left: calc(50% - 75px);
  margin-bottom: 40px;
`;
export default UploadCommentPage;
