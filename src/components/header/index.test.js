import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utils";
import Header from "./index";

const setup = (props = {}) => {
  const wrapper = shallow(<Header {...props} />);
  // console.log(wrapper.debug());
  return wrapper;
};

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("It should render without errors", () => {
    const component = findByTestAttr(wrapper, "headerComponent");
    expect(component.length).toBe(1);
  });
  it("It should render a logo", () => {
    const logo = findByTestAttr(wrapper, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
