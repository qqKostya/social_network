import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPost from "./MyPost";

function MyPostContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const postAdd = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPost
            updateNewPostText={onPostChange}
            addPost={postAdd}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default MyPostContainer;
