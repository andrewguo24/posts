import { types } from "../../actions/types";
import postsReducer from "./reducer";

describe("Post reducer", () => {
  it("should return default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it("should return new state if receiving type", () => {
    const posts = [
      { title: "test 1" },
      { title: "test 2" },
      { title: "test 3" }
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
