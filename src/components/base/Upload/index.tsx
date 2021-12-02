import styled from '@emotion/styled';
import React, { ReactNode, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  droppable?: boolean;
  name: string;
  accept: string;
  value: File;
  onChange?: any;
}

const Upload = ({ children, droppable, name, accept, value, onChange, ...props }: Props) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;

    e.preventDefault(); // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation(); // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input ref={inputRef} type="file" name={name} accept={accept} onChange={handleFileChange} />
      {typeof children === 'function' ? children(file, dragging) : children}
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

export default Upload;
