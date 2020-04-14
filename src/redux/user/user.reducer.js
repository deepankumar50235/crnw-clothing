import { UsersAcionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersAcionTypes.SET_CURRENT_USER:
      console.log("userReducer");
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
