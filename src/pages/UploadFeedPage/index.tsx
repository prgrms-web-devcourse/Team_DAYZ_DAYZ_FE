import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Plus } from 'react-feather';
import { Button } from '../../components/base';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setImageUpload } from '../../utils/api/dayzApi';

type Inputs = {
  content: string;
  classGenre: string;
};

const UploadFeedPage = () => {
  const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

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

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    // data랑 imgSrcArray를 같이 보내야함.
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextWrapper>사진 업로드</TextWrapper>
      <UploadContainer>
        <Input type="file" accept="image/*" id="addImage" onChange={handleChange} />
        <ImageWrapper>
          {imgSrcArray.length
            ? imgSrcArray.map((something, index) => (
                <img key={index} src={something} style={{ width: '200px', paddingRight: '20px' }} />
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

      <TextWrapper>글쓰기</TextWrapper>
      <InputTextArea style={{ height: '100px' }} {...register('content', { required: true })} />
      {errors.content && <span>글쓰시오.</span>}

      <TextWrapper>클래스 태그하기</TextWrapper>
      <InputSelect {...register('classGenre', { required: true })}>
        <option value="">클래스를 선택해 주세요.</option>
        <option value="도자기">도자기 공방</option>
        <option value="반지">반지</option>
      </InputSelect>
      {errors.classGenre && <span>선택하시오.</span>}

      <div>
        <SubmitButton type="submit">업로드하기</SubmitButton>
      </div>
    </StyledForm>
  );
};
const UploadContainer = styled.div`
  width: 100%;
  display: inline-block;
`;

const Input = styled.input`
  display: none;
`;

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
