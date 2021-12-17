import styled from '@emotion/styled';
import React, { useEffect, useState, forwardRef } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atoms';
import { fetchLocationList } from '../../../utils/api/dayzApi';
interface IRegion {
  regionId: number;
  regionName: string;
}

interface IProps {
  ref?: React.RefObject<HTMLSelectElement>;
}

const LoginLocationSetter = React.forwardRef<React.FC>((props, ref) => {
  const { token } = useRecoilValue(userState);
  const [regions, setRegions] = useState<IRegion[]>([]);
  useEffect(() => {
    fetchLocationList(token).then((res) => {
      const seoulRegions = res.data.data.addresses[0].regions;
      setRegions(seoulRegions);
    });
  });
  return (
    <>
      <Select name="area" id="area" style={{ marginRight: '12px' }}>
        <option value="seoul">서울</option>
      </Select>
      <Select defaultValue={'DEFAULT'} name="city" id="city" ref={ref}>
        <option disabled value="DEFAULT">
          선택
        </option>
        {regions?.map((region) => (
          <option key={region.regionId} value={region.regionId}>
            {region.regionName}
          </option>
        ))}
      </Select>
    </>
  );
};
export default LoginLocationSetter;

const Select = styled.select`
  border: 1px soild black;
  border-radius: 12px;
  padding: 12px 24px;
`;
