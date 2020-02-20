import { CLEAR_ERRORS, SET_ERRORS } from "../constants";
import store from "../index";

export default function clearErrors() {
  store.dispatch({ type: CLEAR_ERRORS });
}

export const setErrors = error => dispatch => {
  dispatch({ type: SET_ERRORS, payload: error });
};
