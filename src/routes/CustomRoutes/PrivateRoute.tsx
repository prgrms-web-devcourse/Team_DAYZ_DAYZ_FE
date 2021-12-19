import React, { useCallback, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authUserState, userState } from '../../atoms';
import { sessionStorageToken } from '../../constants/sessionStorage';
import { checkAuthorizationUser } from '../../utils/api/dayzApi';
import { getSessionStorageItem } from '../../utils/functions';

interface IProps {
  path: string;
  exact: boolean;
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
  const authUser = useRecoilValue(authUserState);
  const token = getSessionStorageItem(sessionStorageToken.token, '');
  const setUserData = useSetRecoilState(userState);
  const setAuthUser = useSetRecoilState(authUserState);

  const AuthUser = useCallback(async () => {
    const response = await checkAuthorizationUser(token);
    if (response.status === 200) {
      setUserData({ ...response.data.data });
      setAuthUser(true);
    }
  }, [token]);

  useEffect(() => {
    AuthUser();
  }, [AuthUser]);

  return (
    <Route
      {...rest}
      render={(props) => (authUser ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
