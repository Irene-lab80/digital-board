/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';

type AuthHOCProps = {
  children: React.ReactNode;
}

const AuthHOC: React.FC<AuthHOCProps> = ({ children }) => {
  const isAuth = true;

  if (isAuth) {
    return <>{ children }</>;
  }

  return <Navigate to="/auth" />;
};

export default AuthHOC;
