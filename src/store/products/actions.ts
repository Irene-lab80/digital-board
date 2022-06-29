/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { useSelector } from 'react-redux';
import makeRequest from '../../network';
import { GetUserEmail } from '../auth/selectors';
import { ProductsActionsTypeType } from './types';

export const ProductsActionsType: ProductsActionsTypeType = {
  getProducts: 'GET_PRODUCTS',
  getUserProducts: 'GET_USER_PRODUCTS',
};

export const GetProductsAction = () => async (dispatch: any) => {
  const data = await makeRequest({ url: '/products' });
  const newData = data.filter((el: any) => el.publish === 1);
  dispatch({
    type: ProductsActionsType.getProducts,
    payload: newData,
  });
};

export const GetUserProductsAction = () => async (dispatch: any) => {
  const localUserEmail = useSelector(GetUserEmail);

  const userProductData = await makeRequest({ url: '/products' });
  const newUserProductData = userProductData
    .filter((el: any) => el.userEmail === localUserEmail);
  dispatch({
    type: ProductsActionsType.getUserProducts,
    payload: newUserProductData,
  });
};
