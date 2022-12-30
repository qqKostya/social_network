import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessagePostActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { Navigate } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";



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
    // isAuth: state.auth.isAuth,
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


let AuthRedirectComponent = withAuthRedirect(Dialogs)
// (props) => {
//   if (!props.isAuth) return <Navigate to={"/login"} />;
//   return <Dialogs {...props} />
// }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
