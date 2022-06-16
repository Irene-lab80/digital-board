/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type AuthHocProps = {
  children: React.ReactNode;
}

const AuthHoc: React.FC<AuthHocProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = false;

  if (isAuth) {
    return <>{ children }</>;
  }

  return <Navigate to="/auth" state={{ from: location }} />;
};

export default AuthHoc;
