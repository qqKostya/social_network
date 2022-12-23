import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: "1",
        followed: false,
        photoUrl:
          "https://resizer.mail.ru/p/bce30e81-2786-5ca0-8f7d-b26c06f54abf/AAACH5XkUaTUlqx164V3leYE7pp5s2ysSspxHyAWtKQCE0UBF3gzSrqoeQ4XJi_r7hKAiMGJE68LAlu-VFbwAikeSN0.jpg",
        fullName: "Kostya",
        status: "I am a BOSS",
        location: { city: "St.Peterburg", country: "Russia" },
      },
      {
        id: "2",
        followed: true,
        photoUrl:
          "https://resizer.mail.ru/p/bce30e81-2786-5ca0-8f7d-b26c06f54abf/AAACH5XkUaTUlqx164V3leYE7pp5s2ysSspxHyAWtKQCE0UBF3gzSrqoeQ4XJi_r7hKAiMGJE68LAlu-VFbwAikeSN0.jpg",
        fullName: "Andry",
        status: "I am design master",
        location: { city: "Chelyabinsk", country: "Russia" },
      },
      {
        id: "3",
        followed: false,
        photoUrl:
          "https://resizer.mail.ru/p/bce30e81-2786-5ca0-8f7d-b26c06f54abf/AAACH5XkUaTUlqx164V3leYE7pp5s2ysSspxHyAWtKQCE0UBF3gzSrqoeQ4XJi_r7hKAiMGJE68LAlu-VFbwAikeSN0.jpg",
        fullName: "Dima",
        status: "I am a manager",
        location: { city: "Moscow", country: "Russia" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={styles.userPhoto} src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
