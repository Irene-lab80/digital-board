import { ProductsActionsType } from './actions';
import { ActionType, ProductsReducerType } from './types';

const initialState: ProductsReducerType = {
  data: [],
};

const ProductsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ProductsActionsType.getProducts:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
