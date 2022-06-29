import { RootReducerType } from '../rootType';

export const GetUserName = (state: RootReducerType) => state.auth.name;

export const GetUserEmail = (state: RootReducerType) => state.auth.email;
