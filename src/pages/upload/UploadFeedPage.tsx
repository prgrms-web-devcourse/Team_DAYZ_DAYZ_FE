import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../components/base';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomImageUpload, ErrorMessage } from '../../components/domain';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import { useHistory } from 'react-router-dom';
import { convertImageArray } from '../../utils/functions';

type Inputs = {
  content: string;
  oneDayClassId: string; // number로 바뀌어야함
};

/* 
  {
	"atetlierId": 1,
	"oneDayClassId": 1,
	"content": "우왕킹굿킹",
	"images": [
		{
			"imageUrl": "",
			"sequence": 1,
		},
		{
			"imageUrl": "",
			"sequence": 2,
		},
		{
			"imageUrl": "",
			"sequence": 3,
		}
	]
}
*/

const UploadFeedPage = () => {
  const user = useRecoilValue(userState);
  const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);
  const { id, token, auth } = useRecoilValue(userState);
  const history = useHistory();

  // useEffect(() => {
  //   if (auth === 'ROLE_ATELIER') { // 공방 유저가 아니면 뒤로가기
  //     history.goBack();
  //   }
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<any> = (formData: Inputs) => {
    console.log(formData);
    if (imgSrcArray.length) {
      const data = {
        atetlierId: id,
        // oneDayClassId,
        content: formData.content,
        images: convertImageArray(imgSrcArray),
      };
      console.log('data : ', data);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextWrapper>사진 업로드</TextWrapper>

      <CustomImageUpload imgSrcArray={imgSrcArray} setImgSrcArray={setImgSrcArray} token={token} />

      <TextWrapper>글쓰기</TextWrapper>
      <InputTextArea style={{ height: '100px' }} {...register('content', { required: true })} />
      {errors.content && <ErrorMessage>글을 작성해주세요.</ErrorMessage>}

      <TextWrapper>클래스 태그하기</TextWrapper>
      <InputSelect {...register('oneDayClassId', { required: true })}>
        <option value="">클래스를 선택해 주세요.</option>
        <option value="도자기">도자기 공방</option>
        <option value="반지">반지</option>
      </InputSelect>
      {errors.oneDayClassId && <ErrorMessage>클래스를 선택해주세요.</ErrorMessage>}

      <div>
        <SubmitButton type="submit">업로드하기</SubmitButton>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding-bottom: ${(props) => props.theme.height.bottomHeight};
`;

const TextWrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0;
`;

const InputTextArea = styled.textarea`
  width: calc(100% - 30px);
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  margin-top: 10px;
  padding-left: 20px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: flex-start;
`;

const InputSelect = styled.select`
  width: 100%;
  height: 40px;
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: flex-start;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  max-width: 640px;
  height: 65px;
  position: fixed;
  bottom: ${(props) => props.theme.height.bottomHeight};
`;

export default UploadFeedPage;
