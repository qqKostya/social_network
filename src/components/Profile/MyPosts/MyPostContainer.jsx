import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

function MyPostContainer(props) {
  // debugger;
  let state = props.store.getState();

  const postAdd = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPost
      updateNewPostText={onPostChange}
      addPost={postAdd}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostContainer;
