import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { navigationState, userState } from '../../atoms';
import {
  removeSessionStorageItem,
  getSessionStorageItem,
  setSessionStorageItem,
} from '../../utils/functions/sessionStorage';
const RedirectPageAfterKakao = () => {
  const setNavigationState = useSetRecoilState(navigationState);
  const resetPageState = useResetRecoilState(navigationState);
  const setUserState = useSetRecoilState(userState);
  const history = useHistory();
  const PATH_AUTHOR_INFO = '/signup/author-info';
  const PATH_CHECK_LOCATION = '/signup/check-location';

  useEffect(() => {
    setNavigationState((prev) => ({
      ...prev,
      topNavigation: false,
      bottomNavigation: false,
    }));

    const searchParams = new URL(window.location.href).searchParams;
    const isFillAddressInfo = searchParams.get('addressInfoFlag') === 'true';
    const isFillAuthorInfo = searchParams.get('atelierInfoFlag') === 'true';
    const LOGIN_ROLE_KEY = 'LoginRole';
    const role = getSessionStorageItem(LOGIN_ROLE_KEY, 'ROLE_USER');
    removeSessionStorageItem(LOGIN_ROLE_KEY);
    const token = searchParams.get('token') ?? '';
    setSessionStorageItem('token', token);
    setUserState((oldUserState) => ({ ...oldUserState, token }));
    switch (role) {
      case 'ROLE_USER':
        isFillAddressInfo ? history.push('/') : history.push(PATH_CHECK_LOCATION);
        break;
      case 'ROLE_ATELIER':
        if (isFillAuthorInfo && isFillAddressInfo) history.push('/');
        else if (!isFillAuthorInfo) history.push(PATH_AUTHOR_INFO);
        else if (!isFillAddressInfo) history.push(PATH_CHECK_LOCATION);
        break;
    }
    return () => {
      resetPageState();
    };
  }, []);

  return <span>잠시만 기다려 주세요</span>;
};

export default RedirectPageAfterKakao;
