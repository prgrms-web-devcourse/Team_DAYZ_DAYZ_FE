import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Plus } from 'react-feather';
import { Button } from '../../components/base';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  classGenre: string;
  img: FileList;
};

const UploadFeedPage = () => {
  const [imgArray, setImgArray] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<Inputs>();

  useEffect(() => {
    // const subscription: any = watch('img');
    const values = getValues('img');
    console.log(values);
    let file;
    const fileURLs: any = [];
    for (let i = 0; i < values!.length; i++) {
      file = values![i];
      const reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setImgArray([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
    // return () => subscription.unsubscribe();
  }, [getValues('img')]);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextWrapper>사진 업로드</TextWrapper>
      <UploadContainer>
        <Input type="file" accept="image/*" id="img1" {...register('img', { required: true })} />
        {getValues('img')
          ? imgArray.map((something, index) => (
              <img key={index} src={something} style={{ width: '200px', paddingRight: '20px' }} />
            ))
          : ''}
        <ImageWrapper>
          <label
            htmlFor="img1"
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
        {errors.img && <div>사진 넣어.</div>}
      </UploadContainer>

      <TextWrapper>글쓰기</TextWrapper>
      <InputTextArea style={{ height: '100px' }} {...register('example', { required: true })} />
      {errors.example && <span>글쓰시오.</span>}

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
  width: calc(100% - 20px);
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
