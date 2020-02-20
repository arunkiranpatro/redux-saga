import { GET_TXNCARD, SET_TXNCARD_LOADING } from "../constants";
import clearErrors from "./errorActions";
import transactions from "../../mockdata/transactions.json";

export const getTransactions = () => dispatch => {
  clearErrors();
  dispatch({
    type: GET_TXNCARD,
    payload: transactions.pxResults
  });
};
