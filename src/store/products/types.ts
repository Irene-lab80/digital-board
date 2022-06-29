export type ProductsActionsTypeType = {
  getProducts: 'GET_PRODUCTS';
  getUserProducts: 'GET_USER_PRODUCTS';

};

export type ProductsReducerType = {
  data: any[];
  userProductsData: any[];
};

export type GetProductsActionType = {
  type: ProductsActionsTypeType['getProducts'];
  payload: any[];
};

export type GetUserProductsActionType = {
  type: ProductsActionsTypeType['getUserProducts'];
  payload: any[];
};

export type ActionType = GetProductsActionType | GetUserProductsActionType;
