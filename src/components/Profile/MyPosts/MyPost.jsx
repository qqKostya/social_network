import classes from "./MyPost.module.css";
import React from "react";
import Post from "./Post/Post";
import { Formik, Form, Field } from "formik";

function MyPost(props) {
  const postElemet = props.postData.map((el) => (
    <Post
      message={el.message}
      id={el.id}
      likeCount={el.likeCount}
      key={el.id}
    />
  ));

  return (
    <div className={classes.posts_block}>
      <h3>My posts</h3>
      <AddPostForm sendMessage={props.addPost} />
      <div className={classes.posts}>{postElemet}</div>
    </div>
  );
}

const AddPostForm = (props) => {
  let addNewPost = (value) => {
    props.sendMessage(value);
  };

  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addNewPost(values.newMessageBody);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"enter text"}
            />
          </div>

          <button type={"submit"}>Send2</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyPost;
