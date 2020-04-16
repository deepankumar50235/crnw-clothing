import { UsersAcionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  return {
    type: UsersAcionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
