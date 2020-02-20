import { GET_INTERACTIONS, SET_INTERACTIONS_LOADING } from "../constants";

const initialState = {
  isLoading: true,
  interactions: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INTERACTIONS_LOADING:
      return { ...state, isLoading: true };
    case GET_INTERACTIONS:
      return { ...state, interactions: payload, isLoading: false };
    default:
      return state;
  }
};
