import classes from "./Post.module.css";
import React from "react";

function Post(props) {
  return (
    <div className={classes.item}>
      <img
        src="https://i.ytimg.com/vi/6C9PDnU6QI0/maxresdefault.jpg"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>Like {props.likeCount} </span>
      </div>
    </div>
  );
}

export default Post;
