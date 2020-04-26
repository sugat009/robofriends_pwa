import React from "react";
import {shallow} from "enzyme";
import MainPage from "../../components/MainPage";

let wrapper, mockProps;

beforeEach(() => {
    mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: "",
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});

it('should render App Component', function () {
    expect(wrapper).toMatchSnapshot();
});

it('should filter robots correctly', function () {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: "jon",
            email: "jon@gmail.com"
        }],
        searchField: "jon",
        isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);

    expect(wrapper2.instance().getFilteredRobots()).toEqual([{
        id: 3,
        name: "jon",
        email: "jon@gmail.com"
    }]);
});

it('should filter robots correctly 2', function () {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: "jon",
            email: "jon@gmail.com"
        }],
        searchField: "a",
        isPending: false
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);

    expect(wrapper3.instance().getFilteredRobots()).toEqual([]);
});