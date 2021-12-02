import styled from '@emotion/styled';
import React from 'react';
import { Upload } from '../../components/base';
import { useForm } from '../../hooks';

const UploadFeedPage = () => {
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
    <form onSubmit={handleSubmit}>
      <TextWrapper>사진 업로드</TextWrapper>
      <Upload droppable accept="image/*" onChange={handleChange}>
        {(file: File, dragging: React.DragEvent<HTMLDivElement>) => (
          <div
            style={{
              width: 300,
              height: 100,
              border: '4px dashed #aaa',
              borderColor: dragging ? 'black' : '#aaa',
            }}
          >
            {file ? file.name : 'Upload Photo'}
          </div>
        )}
      </Upload>
      <TextWrapper>글쓰기</TextWrapper>
      <Input type="text" placeholder="Input Content" onChange={handleChange} />
      <TextWrapper>클래스 태그하기</TextWrapper>
      <select onChange={handleSelectChange}>
        <option value="">클래스를 선택해 주세요.</option>
        {/* option에서 map을 돌면 되겠다. */}
        <option value="도자기">도자기 공방</option>
        <option value="반지">반지</option>
      </select>
    </form>
  );
};

const TextWrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 200px;
  height: 200px;
`;

export default UploadFeedPage;
