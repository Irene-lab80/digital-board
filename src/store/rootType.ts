import { UserInfoReducerType } from './auth/types';
import { ProductsReducerType } from './products/types';
import { SearchReducerType } from './search/types';

export type RootReducerType = {
  auth: UserInfoReducerType;
  products: ProductsReducerType;
  search: SearchReducerType;
};
