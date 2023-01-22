import React from "react";
import styles from "./Users.module.css";
// import userPhoto from "../../assets/images/images.png";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../types/types";
const userPhoto = require("../../assets/images/images.png")

type PropsType = {
  user: UsersType
  folowingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, folowingInProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={styles.userPhoto}
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="img"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={folowingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={folowingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
