import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const LocationSetting = () => {
  const [pickState, setPickState] = useState<string[]>([]);
  const DummyData: any = {
    success: false,
    serverDateTime: '2021-11-05T16:55:37.436056',
    data: {
      addresses: [
        {
          cityId: 1,
          cityName: '서울시',
          regions: [
            { regionId: 1, regionName: '강남구' },
            { regionId: 3, regionName: '송파구' },
            { regionId: 2, regionName: '마포구' },
          ],
        },
        {
          cityId: 2,
          cityName: '부산시',
          regions: [
            { regionId: 1, regionName: '남포동' },
            { regionId: 2, regionName: '영도동' },
          ],
        },
      ],
    },
  };

  useEffect(() => {
    const info = DummyData.data.addresses[0].regions
      .sort((a: any, b: any) => a.regionId - b.regionId)
      .map((list: any) => (list = list.regionName));
    setPickState([...info]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: string = (e.target as HTMLInputElement).dataset.id!;
    if (!pickState?.includes(target)) {
      if (pickState.length < 3) {
        setPickState([...pickState, target]);
      } else {
        pickState.shift();
        setPickState([...pickState, target]);
      }
    } else {
      setPickState(pickState.filter((pick: string) => pick !== target));
    }
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
      <H4>관심지역 3곳을 선택해 주세요</H4>
      <div
        style={{
          margin: '10px auto',
          paddingBottom: '20px',
          borderBottom: 'solid 1px #c4c4c4',
          left: '0',
          right: '0',
        }}
      >
        {pickState.length
          ? pickState.map((pick: any) => <SelectedButton key={pick}>{pick}</SelectedButton>)
          : ''}
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
