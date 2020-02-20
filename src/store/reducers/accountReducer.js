import { GET_ACCOUNT, SET_ACCOUNT_LOADING } from "../constants";

const initialState = {
  isLoading: true,
  account: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACCOUNT_LOADING:
      return { ...state, isLoading: true };
    case GET_ACCOUNT:
      return { ...state, account: payload, isLoading: false };
    default:
      return state;
  }
};
