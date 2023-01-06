import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YWwJaZ79oIELX6C7q_QtBT3Doab4yGxcvQ&usqp=CAU"
          alt="hz"
        />
      </div>
      <div className={classes.description_block}>
        <div>
          <h2>{props.profile.fullName}</h2>
          <img src={props.profile.photos.small} alt="avatar" />
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <p>{props.profile.aboutMe}</p>
        </div>
        <div>
          <span>{props.profile.lookingForAJob ? "=)" : "=("}</span>
          <span>{props.profile.lookingForAJobDescription}</span>
        </div>
        <div>
          <h3>My contacts:</h3>
          <ul>
            <li>
              <a href={props.profile.facebook}>facebook</a>
            </li>
            <li>
              <a href={props.profile.website}>website</a>
            </li>
            <li>
              <a href={props.profile.vk}>vk</a>
            </li>
            <li>
              <a href={props.profile.twitter}>twitter</a>
            </li>
            <li>
              <a href={props.profile.instagram}>instagram</a>
            </li>
            <li>
              <a href={props.profile.youtube}>youtube</a>
            </li>
            <li>
              <a href={props.profile.github}>github</a>
            </li>
            <li>
              <a href={props.profile.mainLink}>mainLink</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
