import { GET_TXNSLIST, SET_TXNLIST_LOADING } from "../constants";

const initialState = {
  isLoading: true,
  txns: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TXNLIST_LOADING:
      return { ...state, isLoading: true };
    case GET_TXNSLIST:
      return { ...state, txns: payload, isLoading: false };
    default:
      return state;
  }
};
