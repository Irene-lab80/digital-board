/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { GetUserName } from '../../store/auth/selectors';

type AuthHocProps = {
  children: React.ReactNode;
}

const AuthHoc: React.FC<AuthHocProps> = ({ children }) => {
  const name = useSelector(GetUserName);
  let isAuth;
  const location = useLocation();
  if (name) {
    isAuth = true;
  } else {
    isAuth = false;
  }

  if (isAuth) {
    return <>{ children }</>;
  }

  return <Navigate to="/auth" state={{ from: location }} />;
};

export default AuthHoc;
