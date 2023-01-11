import React, { useEffect, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/images.png";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YWwJaZ79oIELX6C7q_QtBT3Doab4yGxcvQ&usqp=CAU"
          alt="hz"
        />
      </div>
      <div className={styles.description_block}>
        <div className={styles.profileInfo}>
          <img
            src={props.profile.photos.small || userPhoto}
            alt="avatar"
            className={styles.mainPhoto}
          />
          {props.isOwner && (
            <input type="file" onChange={onMainPhotoSelected}></input>
          )}
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        {editMode ? (
          <ProfileDataForm profile={props.profile} />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
