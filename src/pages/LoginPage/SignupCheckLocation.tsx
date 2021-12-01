import React from 'react';
function SignupCheckLocation() {
  return (
    <div>
      <section>
        <h1>거의 끝났어요!</h1>
        <p>관심 지역을 설정해주세요</p>
        <p>선택하신 지역에 가까운 공방을 보여드려요</p>
      </section>
      <div>
        <p>서울 외 지역은 아직 준비 중이에요😥</p>
        <select name="area" id="area">
          <option value="seoul">서울</option>
        </select>
        <select name="city" id="city">
          <option value="Gangdong">강동구</option>
          <option value="Gangnam">강남구</option>
          <option value="Seocho">서초구</option>
        </select>
      </div>
    </div>
  );
}
export default SignupCheckLocation;
