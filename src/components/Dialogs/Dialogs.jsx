import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Formik, Form, Field } from "formik";
import { textareaFormSchema } from "../FormValidation/LoginFormSchema";

function Dialogs(props) {
  const dialogsElement = props.dialogsPage.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  const messagesElement = props.dialogsPage.messagesData.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElement}</div>
      <div className={styles.messages}>
        <div>{messagesElement}</div>
        <AddMassageForm sendMessage={props.messageAdd} />
      </div>
    </div>
  );
}

const AddMassageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values);
  };

  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
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
              <div className={styles.message__error}>
                {errors.newMessageBody}
              </div>
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

export default Dialogs;
