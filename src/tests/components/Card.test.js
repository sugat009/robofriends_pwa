import React from "react";
import {shallow} from "enzyme";

import Card from "../../components/Card";

it('should render Card component', function () {
    expect(shallow(<Card />)).toMatchSnapshot();
});
