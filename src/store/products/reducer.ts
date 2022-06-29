import { ProductsActionsType } from './actions';
import { ActionType, ProductsReducerType } from './types';

const initialState: ProductsReducerType = {
  data: [],
  userProductsData: [],
};

const ProductsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ProductsActionsType.getProducts:
      return {
        ...state,
        data: action.payload,
      };

    case ProductsActionsType.getUserProducts:
      return {
        ...state,
        userProductsData: action.payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
