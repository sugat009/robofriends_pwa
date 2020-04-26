import React from "react";
import {shallow} from "enzyme";

import CardList from "../../components/CardList";

it('should render CardList component', function () {
    const mockRobots = [
        {
            id: 1,
            name: "Jon Snow",
            username: "jonjon",
            email: "jon@gmail.com"
        }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
