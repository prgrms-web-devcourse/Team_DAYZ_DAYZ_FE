import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getSessionStorageItem } from '../../utils/functions';

interface IProps {
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
  // 토큰이 있다면 접근 가능 토근이 없다면 접근 불가.
  // 이름 바꿔야함
  const isLogin = getSessionStorageItem('somethingToken', '');

  return (
    <Route
      {...rest}
      render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
