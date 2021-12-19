import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '../../components/base';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { navigationState } from '../../atoms';

interface Data {
  date: string;
  name: string;
  price: number;
}

const SuccessBookPage = () => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const [data, setDate] = useState<any>({});

  const setNavState = useSetRecoilState(navigationState);
  const resetNavState = useResetRecoilState(navigationState);
  useEffect(() => {
    setNavState((prev) => ({
      ...prev,
      bottomNavigation: false,
    }));
    return () => {
      resetNavState();
    };
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!location.state) {
      history.replace('/');
    }
    setDate({ ...(location.state as any) });
  }, []);

  const handleClick = (linkto: string) => {
    history.replace(linkto);
  };
  if (loading)
    return (
      <LoadingWrapper>
        <LoadingText>결제중입니다.</LoadingText>
      </LoadingWrapper>
    );

  return (
    <StyledSection>
      <CheckedWrapper>
        <AiOutlineCheckCircle size={100} color="purple" />
        <SuccessText>성공적으로 예약되었습니다!</SuccessText>
      </CheckedWrapper>
      <ContentsWrapper>
        <StyledText>결제 상품 : {data.name}</StyledText>
        <StyledText>예약 번호 : 123123123</StyledText>
        <StyledText>예약 날짜 : {data.date}</StyledText>
        <StyledText>결제 금액 : {data.price}원</StyledText>
        <StyledText>결제 날짜 : {date.toLocaleString()}</StyledText>
      </ContentsWrapper>
      <ButtonWrapper>
        <StyledButton type="button" onClick={() => handleClick('/feed')}>
          <StyledText>피드 둘러보기</StyledText>
        </StyledButton>
        <StyledButton type="button" onClick={() => handleClick('/')}>
          <StyledText>메인으로 돌아가기</StyledText>
        </StyledButton>
      </ButtonWrapper>
    </StyledSection>
  );
};
const LoadingWrapper = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font-size: 30px;
`;

const StyledSection = styled.section`
  margin: 0 20px;
`;

const CheckedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;
const SuccessText = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
`;
const ContentsWrapper = styled.div`
  margin: 20px 0;
  margin-bottom: 30px;
`;
const StyledText = styled.div`
  margin: 10px 0;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledButton = styled(Button)`
  display: block;
  width: 80%;
  height: 60px;
  border-radius: 15px;
  margin: 10px 0;
`;
export default SuccessBookPage;
