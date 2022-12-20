import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

// function MyPostContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         const postAdd = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         const onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };

//         return (
//           <MyPost
//             updateNewPostText={onPostChange}
//             addPost={postAdd}
//             postData={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
