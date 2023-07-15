import { ACTIONUSER } from "./actionUser";

const initialState = {
  user: null,
};
export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONUSER:
      return { ...state, user: action.user };

    default:
      return state;
  }
}
