import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ isAuth, login }) => {
  if (isAuth) return <Navigate to="/profile" />;
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          login(values.email, values.password, values.rememberMe, setStatus);
          setSubmitting(false);
        }}
        validationSchema={loginFormSchema}
      >
        {({ status }) => (
          <Form>
            <div>
              <Field type={"email"} name={"email"} placeholder={"e-mail"} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field
                type={"password"}
                name={"password"}
                placeholder={"password"}
              />
            </div>
            <ErrorMessage name="password" component="div" />

            <div>
              <Field type={"checkbox"} name={"rememberMe"} />
              <label htmlFor={"rememberMe"}> remember me </label>
            </div>

            <div className={styles.error}>{status}</div>

            <button type={"submit"}>Log in</button>
            {/* <p>{props.messageError}</p> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    // messageError is a data from the Respons wich shows what is the problem
    //delete this string in case u don't have logic in reducer for it
    // messageError: state.auth.messageError,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
