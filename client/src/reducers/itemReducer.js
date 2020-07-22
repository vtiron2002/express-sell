import { SET_ITEM } from "./constants";

export const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ITEM:
      return { ...action.payload };
    default:
      return state;
  }
};