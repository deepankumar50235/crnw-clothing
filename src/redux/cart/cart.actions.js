import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: null,
  };
};

export const addItem = (item) => {
  console.log("addItem");
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};
