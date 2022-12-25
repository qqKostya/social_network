import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YWwJaZ79oIELX6C7q_QtBT3Doab4yGxcvQ&usqp=CAU" />
      </div>
      <div className={classes.description_block}>
        <img src={props.profile.photos.small} />
        ava + descr
      </div>
    </div>
  );
};

export default ProfileInfo;
