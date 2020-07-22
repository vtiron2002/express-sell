import { combineReducers } from "redux";
import { itemReducer } from "./itemReducer";
import { itemsReducer } from "./itemsReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { checkoutReducer} from "./checkoutReducer";

export const allReducers = combineReducers({
  item: itemReducer,
  items: itemsReducer,
  cart: cartReducer,
  user: userReducer,
  checkout: checkoutReducer
});
