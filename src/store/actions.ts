export const UserInfoActionType = {
  setUserName: 'SET_USER_NAME',
};

export const searchTermActionType = {
  setSearchTerm: 'SET_SEARCH_TERM',
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionType.setUserName,
  payload: name,
});

export const SetSearchTerm = (searchTerm: string) => ({
  type: searchTermActionType.setSearchTerm,
  payload: searchTerm,
});
