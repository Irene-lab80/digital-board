export const UserInfoActionType = {
  setUserName: 'SET_USER_NAME',
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionType.setUserName,
  payload: name,
});
