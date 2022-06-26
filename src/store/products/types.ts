export type ProductsActionsTypeType = {
  getProducts: 'GET_PRODUCTS';
};

export type ProductsReducerType = {
  data: any[];
};

export type GetProductsActionType = {
  type: ProductsActionsTypeType['getProducts'];
  payload: any[];
};

export type ActionType = GetProductsActionType;
