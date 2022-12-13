import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  const dialogsElement = props.state.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  const messagesElement = props.state.messagesData.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>{messagesElement}</div>
    </div>
  );
}

export default Dialogs;
