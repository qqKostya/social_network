import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessagePostActionCreator,
} from "../../redux/dialogs-reducer";

function Dialogs(props) {
  const dialogsElement = props.state.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  const messagesElement = props.state.messagesData.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));

  const messageAdd = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateNewMessagePostActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <textarea
          placeholder="Enter new message"
          value={props.state.newMessageText}
          onChange={onPostChange}
        />
        <button onClick={messageAdd}>Add text</button>
      </div>
      {/* homework */}
    </div>
  );
}

export default Dialogs;
