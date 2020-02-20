import { GET_ACCOUNT, SET_ACCOUNT_LOADING } from "../constants";
import clearErrors from "./errorActions";
import account from "../../mockdata/AccountDetailsPage.json";

export const getAccountDetails = () => dispatch => {
  clearErrors();
  dispatch({
    type: GET_ACCOUNT,
    payload: account.Account
  });
};
