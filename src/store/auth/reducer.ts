import { UserInfoActionType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  name: '',
  email: '',
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return {
        ...state,
        name: action.payload,
      };

    case UserInfoActionType.clearUserName:
      return {
        ...initialState,
      };

    case UserInfoActionType.setUserEmail:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
