import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const LocationSetting = () => {
  const [pickState, setPickState] = useState<string[]>([]);
  const DummyData: any = {
    success: true,
    data: {
      id: 1,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      name: '김영태',
      profileImageUrl: '',
      cityId: 1,
      cityName: '서울시',
      regionId: 1,
      regionName: '송파구',
      auth: 'ROLE_USER',
      atelierId: 1,
    },
    serverDateTime: '2021-11-05T16:55:37.436056',
  };

  useEffect(() => {
    setPickState(DummyData.data.regionName);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: any = (e.target as HTMLInputElement).dataset.id!;
    setPickState(target);
  };
  const district = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];
  return (
    <Wrapper>
      <H4>관심지역을 선택해 주세요</H4>
      <div
        style={{
          margin: '10px auto',
          paddingBottom: '20px',
          borderBottom: 'solid 1px #c4c4c4',
          left: '0',
          right: '0',
        }}
      >
        <SelectedButton>{pickState}</SelectedButton>
      </div>
      <form>
        {district.map((location) => (
          <ToggleContainer key={location}>
            <Input
              type="checkbox"
              data-id={location}
              checked={pickState?.includes(location)}
              onChange={handleChange}
            />
            <Button>{location}</Button>
          </ToggleContainer>
        ))}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20px;
`;
const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const Input = styled.input`
  display: none;
  &:checked + div {
    background: #c4c4c4;
    color: #f5f5f5;
    border: none;
  }
`;
const H4 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
const Button = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #c4c4c4;
  border: solid 1px #c4c4c4;
  border-radius: 20px;
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  margin: 5px;
`;
const SelectedButton = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #f5f5f5;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border-radius: 20px;
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  margin: 5px;
`;
export default LocationSetting;
