import { AUTH_TYPES } from "../types/authTypes.js";
const initialState = {
  user: null,
  token: "",
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH:
      const { user, token, isAuth } = action.payload;

      return {
        ...state,
        user: user,
        token: token,
        isAuth: isAuth,
      };
    default:
      return state;
  }
};
export default authReducer;