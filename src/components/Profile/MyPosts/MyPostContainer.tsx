import { connect } from "react-redux";
import { actions } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import MyPost, { DispatchPropsType, MapPropsType } from "./MyPost";



let mapStateToProps = (state: AppStateType) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};



const MyPostContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
  addPost: actions.addPostActionCreator
})(MyPost);

export default MyPostContainer;
