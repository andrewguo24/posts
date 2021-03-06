import React from "react";
import { shallow } from "enzyme";
import Headline from "./";
import { findByTestAttr, checkProps } from "../../../Utils";

const setup = (props = {}) => {
  const wrapper = shallow(<Headline {...props} />);
  return wrapper;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      wrapper = setup(props);
    });
    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "",
        desc: ""
      };
      wrapper = setup(props);
    });
    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
    it("should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(0);
    });
    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(0);
    });
  });

  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@test.com",
            age: 23,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline.propTypes, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});

// describe("Headline Component", () => {
//   describe("Have props", () => {});
//   describe("Have NO props", () => {});
// });
