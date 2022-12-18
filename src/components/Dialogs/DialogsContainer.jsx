import React from "react";
import {
  addMessageActionCreator,
  updateNewMessagePostActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  const messageAdd = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewMessagePostActionCreator(text));
  };

  return (
    <Dialogs
      messageAdd={messageAdd}
      onPostChange={onPostChange}
      dialogsPage={state}
    />
  );
}

export default DialogsContainer;
