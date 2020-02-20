import { GET_ACCOUNT, SET_ACCOUNT_LOADING } from '../constants';
import clearErrors from './errorActions';
import * as api from '../../api';

export const getAccountInfo = accountNumber => dispatch => {
    clearErrors();
    dispatch({
        type: SET_ACCOUNT_LOADING,
    });
    api.getAccountInfo({
        account_number: accountNumber,
    })
        .then(res => {
            debugger;
            dispatch({
                type: GET_ACCOUNT,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};

export const getAccount = accountNumber => {
    return { type: 'GET_ACCOUNT_REQUEST', accountNumber };
};
