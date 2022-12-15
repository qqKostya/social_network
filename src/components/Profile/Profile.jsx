import React from "react";
import MyPost from "./MyPosts/MyPost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPost postData={props.state.postData} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;
