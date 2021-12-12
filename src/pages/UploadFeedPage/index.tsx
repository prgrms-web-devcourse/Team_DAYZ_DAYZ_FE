import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Plus } from 'react-feather';
import { Button, Upload } from '../../components/base';
import { useForm } from '../../hooks';

const UploadFeedPage = () => {
  const [imgLink, setImgLink] = useState<string | undefined>(undefined);
  // const onSubmitFeed = async (value: object) => {
  //   console.log(values);
  // };

  const { values, errors, isLoading, handleChange, handleSubmit, setValues, handleSelectChange } =
    useForm({
      initialValues: {
        image: {},
        content: '',
        classTag: {},
      },
      onSubmit: async (value) => {
        // await onSubmitFeed(value);
      },
      validate: ({ image, content, classTag }) => {
        const errors = {} as any; // any를 빼면 어떻게 처리하는지 물어보기, 찾아보기
        if (!image) errors.image = '이미지를 넣어주세요.';
        if (!content) errors.content = '설명을 입력해주세요.';
        if (!classTag) errors.classTag = '클래스를 선택해주세요.';
        return errors;
      },
    });
  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextWrapper>사진 업로드</TextWrapper>
      <Upload droppable accept="image/*" imgLink={imgLink} setImgLink={setImgLink}>
        {(file: File, dragging: React.DragEvent<HTMLDivElement>) => (
          <ImageWrapper>
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
          </ImageWrapper>
        )}
      </Upload>
      <TextWrapper>글쓰기</TextWrapper>
      <InputTextArea style={{ height: '100px' }} />
      <TextWrapper>클래스 태그하기</TextWrapper>
      <InputSelect onChange={handleSelectChange}>
        <option value="">클래스를 선택해 주세요.</option>
        {/* option에서 map을 돌면 되겠다. */}
        <option value="도자기">도자기 공방</option>
        <option value="반지">반지</option>
      </InputSelect>
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
