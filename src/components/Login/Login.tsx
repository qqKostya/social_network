import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import { AppDispatch, AppStateType } from "../../redux/redux-store";



const Login = () => {
  
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  
  const dispatch: AppDispatch = useDispatch()

  if (isAuth) return <Navigate to="/profile" />;

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
          captcha: "",
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          dispatch(login(
            values.email,
            values.password,
            values.rememberMe,
            setStatus,
            values.captcha
          ));
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
            {captchaUrl && (
              <div>
                <img src={captchaUrl} alt="captcha" />
                <div>
                  <Field
                    as={"input"}
                    type="text"
                    name="captcha"
                    placeholder=""
                  />
                </div>
              </div>
            )}

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


export default Login