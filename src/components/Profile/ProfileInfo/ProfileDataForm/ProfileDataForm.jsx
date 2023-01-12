import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./ProfileDataForm.module.css";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Name is required'),
  lookingForAJobDescription: Yup.string()
    .required('Field is required')
    .max(100, 'Exceeded maximum number of characters'),
  aboutMe: Yup.string()
    .required('Field is required')
    .max(100, 'Exceeded maximum number of characters')
})

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
      validationSchema={validationSchema}
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
              <ErrorMessage name="fullName" component="div" />
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
              <ErrorMessage name="lookingForAJobDescription" component="div" />
            </label>
            <label>
              <b>About me:</b>
              <Field as={"textarea"} name="aboutMe" placeholder="About me" />
              <ErrorMessage name="aboutMe" component="div" />
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
