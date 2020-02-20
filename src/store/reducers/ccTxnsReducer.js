import { GET_CC_TXNS, SET_CC_TXNS_LOADING } from "../constants";

const initialState = {
  isLoading: true,
  txns: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CC_TXNS_LOADING:
      return { ...state, isLoading: true };
    case GET_CC_TXNS:
      return { ...state, txns: payload, isLoading: false };
    default:
      return state;
  }
};
