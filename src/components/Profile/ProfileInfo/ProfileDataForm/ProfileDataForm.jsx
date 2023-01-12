import React from "react";
import { Field, Form, Formik } from "formik";
import style from "./ProfileDataForm.module.css";

const ProfileDataForm = (props) => {
  return (
    <Formik initialValues={props.profile}>
      {({ initialValues }) => (
        <Form className={style.form}>
          <div>
            <button onClick={() => {}}>Save</button>
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
                value=""
              />
            </label>
            <label>
              <b>About me:</b>
              <Field
                as={"textarea"}
                name="aboutMe"
                placeholder="About me"
                value=""
              />
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
