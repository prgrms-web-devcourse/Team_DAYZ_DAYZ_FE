import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../atom';
const RedirectPageAfterKakao = () => {
  const history = useHistory();
  const PATH_AUTHOR_INFO = '/signup/author-info';
  const PATH_CHECK_LOCATION = '/signup/check-location';

  const token = new URL(window.location.href).searchParams.get('token') ?? '';
  const isFillAddressInfo =
    new URL(window.location.href).searchParams.get('addressInfoFlag') === 'true';
  const isFillAuthorInfo =
    new URL(window.location.href).searchParams.get('atelierInfoFlag') === 'true';
  const role = new URL(window.location.href).searchParams.get('auth');
  const setUserState = useSetRecoilState(userState);
  //todo: token 안들어왔을 때 예외처리
  setUserState((oldUserState) => ({ ...oldUserState, token }));

  switch (role) {
    case 'ROLE_USER':
      isFillAddressInfo ? history.push('/') : history.push(PATH_CHECK_LOCATION);
      break;
    case 'ROLE_ATELIERS':
      if (isFillAuthorInfo && isFillAddressInfo) history.push('/');
      else if (!isFillAuthorInfo) history.push(PATH_AUTHOR_INFO);
      else if (!isFillAddressInfo) history.push(PATH_CHECK_LOCATION);
      break;
  }

  return (
    <>
      <span>잠시만 기다려 주세요</span>
    </>
  );
};

export default RedirectPageAfterKakao;
