import styled from '@emotion/styled';
import React from 'react';
import { Upload } from '../../components/base';

const UploadFeedPage = () => {
  return (
    <>
      <TextWrapper>사진 업로드</TextWrapper>
      <Upload droppable accept="image/*">
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
      <Input type="text" />
      <TextWrapper>클래스 태그하기</TextWrapper>
      <select>
        <option value="">클래스를 선택해 주세요.</option>
        {/* option에서 map을 돌면 되겠다. */}
        <option value="">도자기 공방</option>
        <option value="">반지</option>
      </select>
    </>
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
