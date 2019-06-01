import React from "react";
import { findByTestAttr, checkProps } from "../../../Utils";
import { shallow } from "enzyme";
import SharedButton from "./";

describe("Shared Button Component", () => {
  describe("Checking PropTypes", () => {
    it("should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton.propTypes, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("Should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
