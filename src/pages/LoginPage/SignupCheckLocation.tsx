import styled from '@emotion/styled';
import React from 'react';
function SignupCheckLocation() {
  return (
    <LoginContainer>
      <Title>
        <p>지역을</p>
        <p>알려주세요!</p>
      </Title>
      <Subtitle>
        <p>선택하신 지역에 가까운</p>
        <p>공방을 보여드려요</p>
      </Subtitle>
      <SelectContainer>
        <p>서울 외 지역은 아직 준비 중이에요😥</p>
        <div>
          <select name="area" id="area">
            <option value="seoul">서울</option>
          </select>
          <select name="city" id="city">
            <option value="">선택</option>
            <option value="Gangdong">강동구</option>
            <option value="Gangnam">강남구</option>
            <option value="Seocho">서초구</option>
          </select>
        </div>
      </SelectContainer>
    </LoginContainer>
  );
}
export default SignupCheckLocation;

const LoginContainer = styled.div`
  margin: 40px;
`;

const Title = styled.p`
  font-size: 58px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 180px;
`;

const SelectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  & p {
    margin-bottom: 12px;
  }
  & select {
    font-size: 28px;
    background-color: #eed6fc;
    border-style: none;
    border-radius: 12px;
    padding: 12px 24px;
  }
  & select:nth-of-type(1) {
    width: 150px;
    margin-right: 24px;
  }
  & select:nth-of-type(2) {
    width: 300px;
  }
`;
