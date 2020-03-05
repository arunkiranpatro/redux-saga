import { CLEAR_ERRORS, SET_ERRORS } from "../constants";
import store from "../index";

export function setErrorCreator(error) {
  return {
    type: SET_ERRORS, payload: error
  }
}

export default function clearErrors() {
  store.dispatch({ type: CLEAR_ERRORS });
}

export const setErrors = error => dispatch => {
  dispatch(setErrorCreator(error));
};
