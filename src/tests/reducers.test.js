import {requestRobots, searchRobots} from "../reducers";
import {CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "../constants";

describe("searchRobots", () => {
    const initialStateSearch = {
        searchField: ""
    };

    it('should return the initial state', function () {
        expect(searchRobots(undefined, {})).toEqual({searchField: ""});
    });

    it('should handle CHANGE_SEARCHFIELD', function () {
        expect(searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: "abc"
        })).toEqual({
            searchField: "abc"
        });
    });
});

describe("requestRobots reducer", () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    };

    it('should return the initial state', function () {
        expect(requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', function () {
        expect(requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', function () {
        expect(requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: "123",
                name: "test",
                email: "test@test.com"
            }]
        })).toEqual({
            robots: [{
                id: "123",
                name: "test",
                email: "test@test.com"
            }],
            isPending: false
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED action', function () {
        expect(requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: "Some error"
        })).toEqual({
            robots: [],
            error: "Some error",
            isPending: false
        });
    });
});
