import { GET_FINANCE, SET_FINANCE_LOADING } from "../constants";
import clearErrors from "./errorActions";
import financials from "../../mockdata/financials.json";

export const getFinancials = () => dispatch => {
  clearErrors();
  dispatch({
    type: GET_FINANCE,
    payload: financials.pxResults
  });
};
