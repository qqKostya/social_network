import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";
import { PostType } from "../../../types/types";

type PropsType = {
  postData: Array<PostType>
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
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
}

const MyPost = React.memo(MyPosts);

export default MyPost;
