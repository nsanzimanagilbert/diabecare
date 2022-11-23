import axios from "axios";
import {
  GLUCOSE_LIST_REQUEST,
  GLUCOSE_LIST_SUCCESSS,
  GLUCOSE_LIST_FAIL,
  GLUCOSE_CREATE_REQUEST,
  GLUCOSE_CREATE_SUCCESS,
  GLUCOSE_CREATE_FAIL
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
      type: GLUCOSE_CREATE_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/glucose",
      { name, qty },
      config
    );
    dispatch({
      type: GLUCOSE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GLUCOSE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};