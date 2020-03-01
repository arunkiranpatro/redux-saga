import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';
import { GET_ACCOUNT, SET_ACCOUNT_LOADING, GET_TXNSLIST, SET_TXNLIST_LOADING } from '../constants';
import { SET_ERRORS } from '../constants';
export function* fetchAccount(action) {
    yield put({ type: SET_ACCOUNT_LOADING });
    try {
        const response = yield call(api.getAccountInfo, {
            account_number: action.accountNumber,
        });
        yield put({ type: GET_ACCOUNT, payload: response.data });
    } catch (error) {
        yield put({ type: SET_ERRORS, payload: { message: 'action failed' } });
    }
}
export function* fetchTransactions(action) {
    yield put({ type: SET_TXNLIST_LOADING });
    try {
        const response = yield call(api.getTransactions, {
            account_number: action.accountNumber,
        });
        yield put({ type: GET_TXNSLIST, payload: response.data });
    } catch (error) {
        yield put({ type: SET_ERRORS, payload: { message: 'action failed' } });
    }
}

export default function* rootSaga() {
    yield takeEvery('GET_ACCOUNT_REQUEST', fetchAccount);
    yield takeEvery('GET_TXNSLIST_REQUEST', fetchTransactions);

}
