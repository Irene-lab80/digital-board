import { SearchActionsTypeType } from './types';

export const SearchActionType: SearchActionsTypeType = {
  setSearchTerm: 'SET_SEARCH_TERM',
};

export const SetSearchTermAction = (searchTerm: string) => ({
  type: SearchActionType.setSearchTerm,
  payload: searchTerm,
});
