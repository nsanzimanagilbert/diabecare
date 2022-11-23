import {
  GLUCOSE_LIST_REQUEST,
  GLUCOSE_LIST_SUCCESSS,
  GLUCOSE_LIST_FAIL,
  
} from "../constants/glucoseConstants";
export const glucoseListReducer = (state = { glucose: [] }, action) => {
  switch (action.type) {
    case GLUCOSE_LIST_REQUEST:
      return { loading: true, glucose: [] };
    case GLUCOSE_LIST_SUCCESSS:
      return { loading: false, glucose: action.payload };
    case GLUCOSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};