import React, { useCallback, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authUserState, userState } from '../../atoms';
import { sessionStorageToken } from '../../constants/sessionStorage';
import { checkAuthorizationUser } from '../../utils/api/dayzApi';
import { getSessionStorageItem } from '../../utils/functions';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = useRecoilValue(authUserState);
  const token = getSessionStorageItem(sessionStorageToken.token, '');
  const setUserData = useSetRecoilState(userState);
  const setAuthUser = useSetRecoilState(authUserState);

  const AuthUser = useCallback(async () => {
    try {
      const response = await checkAuthorizationUser(token);
      if (response.status === 200) {
        setUserData({ ...response.data.data });
        setAuthUser(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    //    AuthUser();
  }, []);

  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props.location);
        return isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
