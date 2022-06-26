import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetProductsAction } from '../../../store/products/actions';
import MainPage2 from '../../Pages/MainPage2';

const MainPageContainer2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO: remove ts-ignore?
    // @ts-ignore
    dispatch(GetProductsAction());
  }, []);
  return <MainPage2 />;
};

export default MainPageContainer2;
