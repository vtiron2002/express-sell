import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART,
  CLEAR_CART
} from "./constants";

const setLocalStorage = (n, p) => {
  localStorage.setItem(n, JSON.stringify(p));
};

const cart = JSON.parse(localStorage.getItem("cart")) || [];

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const c = [...state, action.payload];
      setLocalStorage("cart", c);
      return c;
    case REMOVE_FROM_CART:
      const newCart = state.filter(item => item._id !== action.payload);
      setLocalStorage("cart", newCart);
      return newCart;
    case SET_CART:
      setLocalStorage("cart", action.payload);
      return [...action.payload];
    case CLEAR_CART:
      localStorage.removeItem("cart");
      return [];
    default:
      return state;
  }
};
