import React from 'react';
function SignupAuthorInfo() {
  return (
    <div>
      <section>
        <h1>환영해요!</h1>
        <p>사업자번호를 가지고 있는 공방만</p>
        <p>등록할 수 있어요</p>
      </section>
      <form>
        <label htmlFor="workshopName">공방 이름</label>
        <input type="text" id="workshopName" name="workshopName" />
        <label htmlFor="BusinessNumber">사업자 번호</label>
        <input type="text" id="BusinessNumber" name="BusinessNumber" />
        <button>가입하기</button>
      </form>
    </div>
  );
}
export default SignupAuthorInfo;
