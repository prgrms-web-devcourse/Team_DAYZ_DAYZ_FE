import React from 'react';
import { MinusCircle } from 'react-feather';
import { TimeData } from '../../../pages/UploadProductPage/types';

interface Props {
  pickDate: any;
  setPickDate: (T: any) => void;
}

const BookingTable = ({ pickDate, setPickDate }: Props) => {
  const handleDelete = (e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
    e.preventDefault();
    const target = (e.target as HTMLLIElement).closest('li')?.dataset.id;
    pickDate.splice(pickDate?.indexOf(target), 1);
    setPickDate([...pickDate]);
  };
  return (
    <table style={{ marginTop: '10px' }}>
      <thead style={{ borderBottom: 'solid 1px #c4c4c4' }}>
        <tr style={{ textAlign: 'center' }}>
          <th style={{ borderRight: 'solid 1px #c4c4c4' }}>No.</th>
          <th>선택 날짜</th>
          <th style={{ padding: '0 10px' }}>시작 시각</th>
          <th style={{ padding: '0 10px' }}>종료 시각</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {pickDate.length
          ? pickDate.map(({ date, startTime, closeTime }: TimeData, index: number) => (
              <tr key={index + 1} style={{ textAlign: 'center' }}>
                <td
                  style={{
                    borderRight: 'solid 1px #c4c4c4',
                  }}
                >
                  {index + 1}
                </td>
                <td>{date}</td>
                <td>{startTime}</td>
                <td> {closeTime}</td>
                <td onClick={handleDelete}>
                  <MinusCircle style={{ color: 'red' }} size={16} />
                </td>
              </tr>
            ))
          : ''}
      </tbody>
    </table>
  );
};

export default BookingTable;
