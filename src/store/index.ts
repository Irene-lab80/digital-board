import { combineReducers } from 'redux';
import userInfoReducer from './auth/reducer';
import productsReducer from './products/reducer';
import SearchReducer from './search/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
  products: productsReducer,
  search: SearchReducer,
});

export default rootReducer;
