import { GET_TXNCARD, SET_TXNCARD_LOADING } from "../constants";

const initialState = {
  isLoading: true,
  txns: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TXNCARD_LOADING:
      return { ...state, isLoading: true };

    case GET_TXNCARD:
      return { ...state, txns: payload, isLoading: false };

    default:
      return state;
  }
};
