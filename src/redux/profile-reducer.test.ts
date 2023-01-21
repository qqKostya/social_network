import { ProfileType } from "../types/types";
import profileReducer, {
  actions
} from "./profile-reducer";

let state = {
  postData: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: "It's my second post", likeCount: 25 },
    { id: 4, message: "It's my last post", likeCount: 30 },
  ],
  profile: null as ProfileType | null,
  status: "",
  newPostText: ""
};

test("length of posts should be incremented", () => {
  // 1. test data
  let action = actions.addPostActionCreator("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action);
  // 3 expectation
  expect(newState.postData.length).toBe(5);
});

test("message of new posts should be correct", () => {
  // 1. test data
  let action = actions.addPostActionCreator("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action);
  // 3 expectation
  expect(newState.postData[4].message).toBe("it-kamasutra.com");
});

test("after deleting length of messages should be decrement", () => {
  // 1. test data
  let action = actions.deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3 expectation
  expect(newState.postData.length).toBe(3);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = actions.deletePost(1000);
  // 2. action
  let newState = profileReducer(state, action);
  // 3 expectation
  expect(newState.postData.length).toBe(4);
});
