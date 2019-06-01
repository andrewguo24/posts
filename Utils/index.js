import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../src/reducers";
import { middlewares } from "./../src/createStore";

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

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
