import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthForm from '../../common/AuthForm';
import FormHeader from '../../common/FormHeader';

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const fromPage = location.state?.from?.pathname || '/';
  return (
    <>
      <FormHeader />
      <AuthForm />
    </>
  );
};

export default AuthPage;
