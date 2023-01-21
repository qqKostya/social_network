import { connect } from "react-redux";
import { actions } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newMessageBody) => {
      dispatch(actions.addPostActionCreator(newMessageBody));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
