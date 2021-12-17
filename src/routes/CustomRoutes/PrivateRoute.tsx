import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUserState } from '../../atoms';

interface IProps {
  path: string;
  exact: boolean;
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
  const authUser = useRecoilValue(authUserState);

  return (
    <Route
      {...rest}
      render={(props) => (authUser ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
