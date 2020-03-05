import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { getAccountInfo } from '../../store/actions/accountActions';
import accountData from '../../mockdata/AccountDetailsPage.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.unmock('../../api');
import * as api from '../../api';

api.getAccountInfo = jest.fn(
    () => new Promise((res, rej) => res({ data: accountData.account }))
);

describe('Get Account Info', () => {
    it("Get account details", () => {
        const expectedResults = [{ type: 'SET_ACCOUNT_LOADING' }, { type: 'GET_ACCOUNT', payload: accountData.account }];
        const store = mockStore({
            accountCard: {}
        });
        return store.dispatch(getAccountInfo()).then(() => {
            expect(store.getActions()).toEqual(expectedResults);
            expect(api.getAccountInfo).toHaveBeenCalled();
        })
    });
});