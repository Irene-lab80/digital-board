import { UserInfoActionType } from './actions';
import { userInfoReducerType, ActionType } from './types';

const initialState: userInfoReducerType = {
  name: '',
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
