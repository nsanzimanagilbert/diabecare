import axios from "axios";
import {
  GLUCOSE_LIST_REQUEST,
  GLUCOSE_LIST_SUCCESSS,
  GLUCOSE_LIST_FAIL
} from "../constants/glucoseConstants";

export const listAllGlucose = () => async (dispatch) => {
  try {
    dispatch({ type: GLUCOSE_LIST_REQUEST });
    const { data } = await axios.get("/api/glucose");
    dispatch({
      type: GLUCOSE_LIST_SUCCESSS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GLUCOSE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createGlucose = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    //Login in the user right after registering
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};