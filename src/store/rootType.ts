import { UserInfoReducerType } from './auth/types';
import { ProductsReducerType } from './products/types';

export type RootReducerType = {
  auth: UserInfoReducerType;
  products: ProductsReducerType;
};
