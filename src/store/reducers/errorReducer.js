import { GET_ERRORS, CLEAR_ERRORS, SET_ERRORS } from '../constants';

const initialState = {
  hasError: false,
  error: {}
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ERRORS:
      return payload;

    case CLEAR_ERRORS:
      return { ...state, hasError: false, error: {} };

    case SET_ERRORS:
      return ({ ...state, hasError: true, error: payload });

    default:
      return state;
  }
};
