import React, { ChangeEvent, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/images.png";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import { ProfileType } from "../../../types/types";
// const userPhoto = require("../../../assets/images/images.png")


type PropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({
  profile,
  savePhoto,
  isOwner,
  status,
  updateStatus,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false);
      })
      .catch(() => {
        alert("Invalid url format");
      });
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
            src={profile.photos.small || userPhoto}
            alt="avatar"
            className={styles.mainPhoto}
          />
          {isOwner && (
            <input type="file" onChange={onMainPhotoSelected}></input>
          )}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        {editMode ? (
          <ProfileDataForm profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
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
