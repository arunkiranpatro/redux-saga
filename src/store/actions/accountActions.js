import { GET_ACCOUNT, SET_ACCOUNT_LOADING } from '../constants';
import clearErrors from './errorActions';
import axios from 'axios';

export const getAccountInfo = accountNumber => dispatch => {
    clearErrors();
    dispatch({
        type: SET_ACCOUNT_LOADING,
    });
    axios
        .post('http://localhost:5000/api/users', {
            account_number: accountNumber,
        })
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_ACCOUNT,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};
