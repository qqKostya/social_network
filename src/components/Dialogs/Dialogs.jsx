import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessagePostActionCreator,
} from "../../redux/state";

function Dialogs(props) {
  const dialogsElement = props.state.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  const messagesElement = props.state.messagesData.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));

  const newMessageElement = React.createRef();

  const messageAdd = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onPostChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessagePostActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>{messagesElement}</div>
      {/* homework */}
      <div>
        <div>
          <textarea
            ref={newMessageElement}
            value={props.state.newMessageText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={messageAdd}>Add text</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
