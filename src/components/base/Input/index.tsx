import styled from '@emotion/styled';

const Input = styled.input`
  background: none;
  border: solid 1px #c4c4c4;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:hover {
    border: solid 1px black;
  }
`;

export default Input;
