export type SearchActionsTypeType = {
  setSearchTerm: 'SET_SEARCH_TERM';
};

export type SearchReducerType = {
  searchTerm: string;
};

export type GetSearchTermActionType = {
  type: SearchActionsTypeType['setSearchTerm'];
  payload: string;
};

export type ActionType = GetSearchTermActionType;
