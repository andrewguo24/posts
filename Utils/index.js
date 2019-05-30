import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, attr) => {
  const component = wrapper.find(`[data-test='${attr}']`);
  return component;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
