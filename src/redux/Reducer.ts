import { ACTION_USER } from "./actionToken";
import { ACTION_TOKEN } from "./actionUser";

const initialState = {
  token: "",
  user: {},
};

export function Reducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTION_TOKEN:
      return { ...state, token: action.token };
    case ACTION_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
