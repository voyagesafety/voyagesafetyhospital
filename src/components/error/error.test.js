import React from "react";
import { shallow } from "enzyme";
import Error from "./error";

describe("Error", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
  });
});
