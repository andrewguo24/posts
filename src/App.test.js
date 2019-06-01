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

  it("exampleMethod_updatesState method should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsAValue method should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
  });
});
