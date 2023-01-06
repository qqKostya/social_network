import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";

const MyPost = React.memo((props) => {
  const postElemet = props.postData.map((el) => (
    <Post
      message={el.message}
      id={el.id}
      likeCount={el.likeCount}
      key={el.id}
    />
  ));

  return (
    <div className={styles.posts_block}>
      <h3>My posts</h3>
      <AddPostForm sendMessage={props.addPost} />
      <div className={styles.posts}>{postElemet}</div>
    </div>
  );
});

export default MyPost;
