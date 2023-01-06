import styles from "./MyPost.module.css";
import React from "react";
import { Formik, Form, Field } from "formik";
import { textareaFormSchema } from "../../FormValidation/LoginFormSchema";

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
      validationSchema={textareaFormSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <Field
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"enter text"}
            />
            {errors.newMessageBody && touched.newMessageBody ? (
              <div className={styles.post__error}>{errors.newMessageBody}</div>
            ) : null}
          </div>

          <button className={styles.btn} type={"submit"}>
            Send2
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddPostForm