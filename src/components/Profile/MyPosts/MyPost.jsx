import classes from "./MyPost.module.css";
import React from "react";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

function MyPost(props) {
  const postElemet = props.postData.map((el) => (
    <Post
      message={el.message}
      id={el.id}
      likeCount={el.likeCount}
      key={el.id}
    />
  ));
  const newPostElement = React.createRef();

  const postAdd = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.posts_block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={postAdd}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElemet}</div>
    </div>
  );
}

export default MyPost;
