import makeRequest from '../../network';
import { ProductsActionsTypeType } from './types';

export const ProductsActionsType: ProductsActionsTypeType = {
  getProducts: 'GET_PRODUCTS',
};

export const GetProductsAction = () => async (dispatch: any) => {
  const data = await makeRequest({ url: '/products' });
  dispatch({
    type: ProductsActionsType.getProducts,
    payload: data.results,
  });
};
