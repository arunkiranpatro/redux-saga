import { setErrorCreator } from '../../store/actions/errorActions';
import { SET_ERRORS } from "../../store/constants";

describe('error action creator', () => {
    it('create error', () => {
        const error = "some error happened";
        const expectedAction = { type: SET_ERRORS, payload: error };
        const actualResult = setErrorCreator(error);
        expect(actualResult).toEqual(expectedAction);
    });
})
