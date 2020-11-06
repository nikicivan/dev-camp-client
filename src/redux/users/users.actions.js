import USER from "./users.types";
import axios from "../../axios";

export const login = (email, password) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER.USER_LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/auth/login",
        { email, password },
        config,
      );

      dispatch({ type: USER.USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        {
          type: USER.USER_LOGIN_FAIL,
          payload: error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
        },
      );
    }
  };

export const logout = () =>
  (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER.USER_LOGOUT });
  };

export const register = (name, email, password, role) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER.USER_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/auth/register",
        { name, email, password, role },
        config,
      );

      dispatch({ type: USER.USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER.USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        {
          type: USER.USER_REGISTER_FAIL,
          payload: error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
        },
      );
    }
  };
