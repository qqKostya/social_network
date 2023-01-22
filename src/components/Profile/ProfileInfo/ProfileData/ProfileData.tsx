import React from 'react'
import { ContactsType, ProfileType } from '../../../../types/types';
import styles from "../ProfileInfo.module.css";
import Contact from './Contact';


type PropsType = {
  profile: ProfileType
   isOwner: boolean
    goToEditMode: () => void
}


const ProfileData: React.FC<PropsType> = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div className={styles.profileInfo}>
        <div className={styles.profileJob}>
          <b>Full name: </b>
          {profile.fullName}
        </div>
        <div className={styles.profileJob}>
          <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob && (
          <div className={styles.profileJob}>
            <b>My professional skills: </b>
            {profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>About me:</b>
          {profile.aboutMe}
        </div>
      </div>
      <div className={styles.profileInfo}>
        <b>My contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as keyof ContactsType]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileData