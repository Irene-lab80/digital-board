import { RootReducerType } from '../rootType';

export const getProducts = (state: RootReducerType) => state.products.data;

export const getUserProducts = (state: RootReducerType) => state.products.userProductsData;
