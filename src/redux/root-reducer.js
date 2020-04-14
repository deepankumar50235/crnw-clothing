import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

console.log("rootReducer");
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
