import { combineReducers } from 'redux';
import userInfoReducer from './auth/reducer';
import productsReducer from './products/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
  products: productsReducer,
});

export default rootReducer;
