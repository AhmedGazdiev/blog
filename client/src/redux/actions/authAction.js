import { api } from "../../api";
import { ALERT } from "../types/alertTypes";
import { AUTH_TYPES } from "../types/authTypes";

export const register = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await api.post("api/register", userData);

    if (res.data) {
      navigate("/login");
    }

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const { data } = await api.post("/api/login", userData);

    if (data) {
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: data.user,
          token: data.accessToken,
          isAuth: true,
        },
      });
      localStorage.setItem("token", data.accessToken);
    }
    dispatch({ type: ALERT, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({ type: ALERT, payload: { loading: false } });
  }
};
export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      dispatch({ type: ALERT, payload: { loading: true } });

      const { data } = await api.get("/api/refresh_token");

      if (data) {
        dispatch({
          type: AUTH_TYPES.AUTH,
          payload: {
            user: data.user,
            token: data.accessToken,
            isAuth: true,
          },
        });
        localStorage.setItem("token", data.accessToken);
      }

      dispatch({ type: ALERT, payload: { loading: false } });
    } catch (err) {
      console.log(err.response.data);
      dispatch({ type: ALERT, payload: { loading: false } });
    }
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await api.get("/api/logout");

    if (res.data) {
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: null,
          token: "",
          isAuth: false,
        }
      });
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    dispatch({ type: ALERT, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({ type: ALERT, payload: { loading: false } });
  }
};