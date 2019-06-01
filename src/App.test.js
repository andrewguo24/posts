import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../Utils/index";
import App from "./App";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  //   console.log(wrapper.debug());
  return wrapper;
};

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "Example title 1", body: "Some text" },
        { title: "Example title 2", body: "Some text" },
        { title: "Example title 3", body: "Some text" }
      ]
    };
    wrapper = setup(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
