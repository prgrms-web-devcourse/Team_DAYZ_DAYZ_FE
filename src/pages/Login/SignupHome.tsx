import React from 'react';
function SignupHome() {
  return (
    <div>
      <section>
        <h1>환영해요!</h1>
        <p>체험을 원하면 일반 회원으로</p>
        <p>공방을 만들고 싶다면 작가 회원으로</p>
        <p>시작해주세요</p>
      </section>
      <section>
        <div>
          <p>일반 회원으로 시작하기</p>
          <button>→</button>
        </div>
        <div>
          <p>작가 회원으로 시작하기</p>
          <button>←</button>
        </div>
      </section>
    </div>
  );
}
export default SignupHome;
