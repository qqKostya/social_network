import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./ProfileDataForm.module.css";
import profileFormSchema from "../../../FormValidation/ProfileFormSchema";

const ProfileDataForm = (props) => {
  const submit = props.onSubmit;

  return (
    <Formik
      initialValues={props.profile}
      onSubmit={submit}
      validationSchema={profileFormSchema}
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
            <div>
              <b>Contacts:</b>
              <ul>
                {Object.keys(props.profile.contacts).map((key) => {
                  return (
                    <li key={key}>
                      <label>
                        <b>{key}:</b>
                        <Field
                          as={"input"}
                          type="text"
                          name={"contacts." + key}
                          placeholder={key}
                        />
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
