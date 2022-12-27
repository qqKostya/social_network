import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


function Dialogs(props) {
  const dialogsElement = props.dialogsPage.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  const messagesElement = props.dialogsPage.messagesData.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));

  const onAddMessage = () => {
    props.messageAdd();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.onPostChange(text);
  };

  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <textarea
          placeholder="Enter new message"
          value={props.dialogsPage.newMessageText}
          onChange={onPostChange}
        />
        <button onClick={onAddMessage}>Add text</button>
      </div>
      {/* homework */}
    </div>
  );
}

export default Dialogs;
