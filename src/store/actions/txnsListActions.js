import { GET_TXNSLIST, SET_TXNLIST_LOADING } from "../constants";
import clearErrors from "./errorActions";

import txns from "../../mockdata/TxnsLog.json";

export const getTxnslist = () => dispatch => {
  clearErrors();
  dispatch({
    type: GET_TXNSLIST,
    payload: txns.pxResults
  });
};

export const getTransactions = accountNumber => {
  return { type: 'GET_TXNSLIST_REQUEST', accountNumber };
};