import styled from '@emotion/styled';
import React from 'react';
import { ArrowRightCircle, ArrowLeftCircle } from 'react-feather';
function LoginPage() {
  return (
    <>
      <LoginHomeContainer>
        <Title>
          <p>오늘은</p>
          <p>뭘 해볼까?</p>
        </Title>
        <Subtitle>
          <p>카카오톡으로 로그인 또는 회원가입을</p>
          <p>할 수 있어요</p>
        </Subtitle>
        <SelectContainer>
          <UserContainer>
            <div>
              <p>일반 회원으로</p>
              <p>시작하기</p>
            </div>
            <ArrowRightCircle size={90} />
          </UserContainer>
          <AuthorContainer>
            <ArrowLeftCircle size={90} />
            <div>
              <p>작가 회원으로</p>
              <p>시작하기</p>
            </div>
          </AuthorContainer>
        </SelectContainer>
      </LoginHomeContainer>
      <PopUpContainer>
        <PopUp>
          <p className="PopUpTitle">처음이시군요!</p>
          <div className="PopUpSubtitle">
            <p>회원가입을 진행해주세요</p>
            <p>금방 끝나요!</p>
          </div>
          <button className="PopUpKakaoBtn">Kakao로 시작</button>
        </PopUp>
      </PopUpContainer>
    </>
  );
}

export default LoginPage;

const LoginHomeContainer = styled.div`
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
  font-size: 58px;
  font-weight: 600;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
  & div p:first-child {
    margin-bottom: 12px;
  }
`;
const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    text-align: end;
    & p:first-child {
      margin-bottom: 12px;
    }
  }
`;

const PopUpContainer = styled.section`
  position: fixed;
  background-color: #0000009b;
  height: 100vh;
  width: 100vw;
`;

const PopUp = styled.div`
  background-color: white;
  width: 480px;
  flex-direction: column;
  padding: 24px 30px;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  & .PopUpTitle {
    font-size: 58px;
    font-weight: 600;
    margin-bottom: 36px;
  }
  & .PopUpSubtitle {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 36px;
    & p:first-child {
      margin-bottom: 12px;
    }
  }
  & .PopUpKakaoBtn {
    background-color: #f9e000;
    border-style: none;
    border-radius: 12px;
    height: 54px;
    width: 480px;
    font-size: 24px;
    transition: background-color 0.2s;
    &:hover {
      background-color: #9b8b005e;
    }
  }
`;
