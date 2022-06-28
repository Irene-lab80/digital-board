import { SearchActionType } from './actions';
import { ActionType } from './types';

const initialState = {
  searchTerm: '',
};

const SearchReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SearchActionType.setSearchTerm:
      return {
        ...state,
        searchTerm: action.payload
      };
    default: return state;
  }
};

export default SearchReducer;
