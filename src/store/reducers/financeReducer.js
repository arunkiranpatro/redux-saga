import { GET_FINANCE, SET_FINANCE_LOADING } from "../constants";

const initialState = {
  isLoading: true,
  financials: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FINANCE_LOADING:
      return { ...state, isLoading: true };
    case GET_FINANCE:
      return { ...state, financials: payload, isLoading: false };
    default:
      return state;
  }
};
