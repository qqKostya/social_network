import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Formik, Form, Field } from "formik";

function Dialogs(props) {
  const dialogsElement = props.dialogsPage.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  const messagesElement = props.dialogsPage.messagesData.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));

  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>
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

export default Dialogs;
