import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetProductsAction } from '../../../store/products/actions';
import MainPage from '../../Pages/MainPage';

const MainPageContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(GetProductsAction());
  }, []);
  return <MainPage />;
};

export default MainPageContainer;
