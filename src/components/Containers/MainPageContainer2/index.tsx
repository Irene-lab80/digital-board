import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GetProductsAction } from '../../../store/products/actions';
import getProducts from '../../../store/products/selectors';
import MainPage2 from '../../Pages/MainPage2';

const MainPageContainer2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO: remove ts-ignore
    // @ts-ignore
    dispatch(GetProductsAction());
  }, []);
  const productData = useSelector(getProducts);
  return <MainPage2 productData={productData} />;
};

export default MainPageContainer2;
