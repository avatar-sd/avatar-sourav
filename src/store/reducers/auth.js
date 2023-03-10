import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils";

export const initialState = {
  data: undefined,
};

const tokenUpdate = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      data: action.data,
    });
  } else {
    return { data: null };
  }
};

const AuthReducer = (state = initialState, action = { type: "" }) => {
  switch (action.type) {
    case actionTypes.TOKEN_UPDATE:
      return tokenUpdate(state, action);
    default:
      return state;
  }
};

export default AuthReducer;
