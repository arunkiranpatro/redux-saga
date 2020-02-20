import { GET_INTERACTIONS, SET_INTERACTIONS_LOADING } from "../constants";
import clearErrors from "./errorActions";
import interactions from "../../mockdata/Interactions.json";

export const getInteractions = () => dispatch => {
  clearErrors();
  dispatch({
    type: GET_INTERACTIONS,
    payload: interactions.pxResults
  });
};
