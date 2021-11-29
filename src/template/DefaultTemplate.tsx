import React from 'react';

interface Props {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};

export default DefaultTemplate;
