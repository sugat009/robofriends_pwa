import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import fetch from "jest-fetch-mock";

import {CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "../constants";
import {requestRobots as actionRequestRobots, setSearchField} from "../actions";
import {robots} from "./fixtures/robots.fixtures";

const mockStore = configureMockStore([thunk]);

describe('setSearchField', function () {
    it('should create an action to search robots', function () {
        const text = "woooo";
        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: text
        };

        expect(setSearchField(text)).toEqual(expectedAction);
    });

    it('should handle requesting robots API', function () {
        const store = mockStore();
        store.dispatch(actionRequestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        };
        expect(action[0]).toEqual(expectedAction);

    });
});
