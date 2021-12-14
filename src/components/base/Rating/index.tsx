import styled from '@emotion/styled';
import React, { ReactElement, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface Props {
  setRate?: any;
}

const Rating = ({ setRate }: Props) => {
  const checkedArr = [false, false, false, false, false];
  const [clickState, setClickState] = useState<boolean[]>([]);
  useEffect(() => {
    setClickState(checkedArr);
  }, []);
  const handleClick = (idx: number) => {
    const arr = checkedArr;
    for (let i = 0; i < 5; i++) {
      arr[i] = i <= idx ? true : false;
    }
    setClickState(arr);
    setRate(idx + 1);
  };

  return (
    <RatingWrapper>
      {checkedArr.map((list, idx) => (
        <section key={idx}>
          <Input type="checkbox" checked={clickState[idx]} />
          <div>
            <AiFillStar size={40} onClick={() => handleClick(idx)} />
          </div>
        </section>
      ))}
    </RatingWrapper>
  );
};

const RatingWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  display: none;
  + div {
    color: rgba(0, 0, 0, 0.1);
  }
  &:checked + div {
    color: #fdcb6e;
  }
`;
export default Rating;
