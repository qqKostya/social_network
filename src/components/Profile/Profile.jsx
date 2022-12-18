import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  // debugger;
  return (
    <div>
      <ProfileInfo />

      <MyPostContainer store={props.store} />
    </div>
  );
}

export default Profile;
