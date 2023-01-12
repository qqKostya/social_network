import React from "react";
import { Field, Form, Formik } from "formik";
import style from "./ProfileDataForm.module.css";

const ProfileDataForm = (props) => {
  const submit = props.onSubmit;

  return (
    <Formik
      initialValues={{
        aboutMe: "",
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
          facebook: "",
          website: "",
          vk: "",
          twitter: "",
          instagram: "",
          youtube: "",
          github: "",
          mainLink: "",
        },
      }}
      onSubmit={submit}
    >
      {() => (
        <Form className={style.form}>
          <div>
            <button type="submit">Save</button>
          </div>
          <div>
            <label>
              <b>Full name:</b>
              <Field
                as={"input"}
                type="text"
                name="fullName"
                placeholder="Name"
              />
            </label>
            <label>
              <b>Looking for a job:</b>
              <Field type="checkbox" name="lookingForAJob" />
            </label>
            <label>
              <b>My professional skills:</b>
              <Field
                as={"textarea"}
                name="lookingForAJobDescription"
                placeholder="My professional skills"
              />
            </label>
            <label>
              <b>About me:</b>
              <Field as={"textarea"} name="aboutMe" placeholder="About me" />
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
