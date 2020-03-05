import { fetchTransactions } from '../../store/sagas';
import { call, put } from 'redux-saga/effects';


jest.unmock('../../api');
import * as api from '../../api';
api.getTransactions = jest.fn(
    () => { return "test"; }
);


describe('sagas', () => {
    it("transaction saga", () => {
        const expectedResult = [
            { type: "SET_TXNLIST_LOADING" },
            { type: "GET_TXNSLIST", payload: "test" },
            { type: "SET_ERRORS", payload: { message: 'action failed' } }
        ]
        const iterator = fetchTransactions({ accountNumber: "" });
        expect(iterator.next().value).toEqual(put(expectedResult[0]));
        expect(iterator.next().value).toEqual(call(api.getTransactions, { account_number: "" }));
        expect(iterator.next().value).toEqual(put(expectedResult[2]));
    });
});