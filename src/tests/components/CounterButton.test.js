import React from "react";
import {shallow} from "enzyme";

import CounterButton from "../../components/CounterButton";

let wrapper, mockColor;

beforeEach(() => {
    mockColor = "red";
    wrapper = shallow(<CounterButton color={mockColor}/>);
});

it('should render CounterButton component', function () {
    expect(wrapper).toMatchSnapshot();
});

it('should correctly increment the counter', function () {
    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({count: 1});
});
