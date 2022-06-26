import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetUserName from '../../../store/auth/selectors';
import AuthPage from '../../Pages/AuthPage';

const AuthContainer = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, [name]);

  return <AuthPage />;
};

export default AuthContainer;
