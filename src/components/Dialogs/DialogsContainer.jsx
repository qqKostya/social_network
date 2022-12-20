import React from "react";
import {
  addMessageActionCreator,
  updateNewMessagePostActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        const messageAdd = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onPostChange = (text) => {
          store.dispatch(updateNewMessagePostActionCreator(text));
        };
        return (
          <Dialogs
            messageAdd={messageAdd}
            onPostChange={onPostChange}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
