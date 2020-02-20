import { GET_CC_TXNS, SET_CC_TXNS_LOADING } from "../constants";
import clearErrors from "./errorActions";
import cctransactions from "../../mockdata/CCtransactions.json";

export const getCCTransactions = () => dispatch => {
  clearErrors();
  dispatch({
    type: GET_CC_TXNS,
    payload: cctransactions.pxResults
  });
};
