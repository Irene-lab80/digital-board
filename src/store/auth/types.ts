export type UserInfoReducerType = {
  name: string;
  email: string;
}

export type UserInfoActionTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserEmail: 'SET_USER_EMAIL',
  clearUserName: 'CLEAR_USER_NAME',
}

export type SetUserNameActionType = {
  type: UserInfoActionTypeType['setUserName'];
  payload: string;
}

export type SetUserEmailActionType = {
  type: UserInfoActionTypeType['setUserEmail'];
  payload: string;
}

export type ClearUserNameActionType = {
  type: UserInfoActionTypeType['clearUserName'];
}

export type ActionType = SetUserNameActionType | ClearUserNameActionType | SetUserEmailActionType;
