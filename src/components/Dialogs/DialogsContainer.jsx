import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessagePostActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// function DialogsContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;

//         const messageAdd = () => {
//           store.dispatch(addMessageActionCreator());
//         };

//         const onPostChange = (text) => {
//           store.dispatch(updateNewMessagePostActionCreator(text));
//         };
//         return (
//           <Dialogs
//             messageAdd={messageAdd}
//             onPostChange={onPostChange}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    messageAdd: () => {
      dispatch(addMessageActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewMessagePostActionCreator(text));
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
