import { UsersAcionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  console.log("setCurrentUser");
  return {
    type: UsersAcionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
