import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import { Button } from '../../components/base';
import { fetchLocationList, setLocation } from '../../utils/api/dayzApi';

interface IRegion {
  regionId: number;
  regionName: string;
}

function SignupCheckLocation() {
  const history = useHistory();
  const { token } = useRecoilValue(userState);
  const [regions, setRegions] = useState<IRegion[]>([]);
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation({ token, cityId: 1, regionId: +e.target.value });
    history.push('/');
  };

  useEffect(() => {
    fetchLocationList(token).then((res) => {
      const seoulRegions = res.data.payload.addresses[0].regions;
      setRegions(seoulRegions);
    });
  }, []);

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
        <p>서울 외 지역은 준비 중이에요😥</p>
        <div>
          <select name="area" id="area">
            <option value="seoul">서울</option>
          </select>
          <select defaultValue={'DEFAULT'} name="city" id="city" onChange={onChange}>
            <option disabled value="DEFAULT">
              선택
            </option>
            {regions?.map((region) => (
              <option key={region.regionId} value={region.regionId}>
                {region.regionName}
              </option>
            ))}
          </select>
        </div>
        {/* todo: 버튼 누르면 관심지역 POST && push to home
         <SubmitBtn type="submit" onSubmit={onSubmit}>
          완료
        </SubmitBtn> */}
      </SelectContainer>
    </LoginContainer>
  );
}
export default SignupCheckLocation;

const LoginContainer = styled.div`
  margin: 40px;
`;

const Title = styled.p`
  font-size: 52px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  margin-bottom: 80px;
`;

const SelectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin-bottom: 12px;
  }
  & select {
    border: 1px soild black;
    border-radius: 12px;
    padding: 12px 24px;
  }
  & select:nth-of-type(1) {
    width: 100px;
    margin-right: 24px;
  }
  & select:nth-of-type(2) {
    width: 150px;
  }
`;
const SubmitBtn = styled(Button)`
  height: 40px;
  width: 80px;
  text-decoration: none;
  border-radius: 12px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
  margin-top: 100px;
`;
