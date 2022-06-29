import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetUserProductsAction } from '../../../store/products/actions';
import MyAdsPage from '../../Pages/MyAdsPage';

const MyAdsPageContainer = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // TODO: remove ts-ignore?
  //   // @ts-ignore
  //   dispatch(GetUserProductsAction());
  // }, []);

  return <MyAdsPage />;
};

export default MyAdsPageContainer;
