const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: "1",
    //   followed: false,
    //   photoUrl:
    //     "https://resizer.mail.ru/p/bce30e81-2786-5ca0-8f7d-b26c06f54abf/AAACH5XkUaTUlqx164V3leYE7pp5s2ysSspxHyAWtKQCE0UBF3gzSrqoeQ4XJi_r7hKAiMGJE68LAlu-VFbwAikeSN0.jpg",
    //   fullName: "Kostya",
    //   status: "I am a BOSS",
    //   location: { city: "St.Peterburg", country: "Russia" },
    // },
    // {
    //   id: "2",
    //   followed: true,
    //   photoUrl:
    //     "https://resizer.mail.ru/p/bce30e81-2786-5ca0-8f7d-b26c06f54abf/AAACH5XkUaTUlqx164V3leYE7pp5s2ysSspxHyAWtKQCE0UBF3gzSrqoeQ4XJi_r7hKAiMGJE68LAlu-VFbwAikeSN0.jpg",
    //   fullName: "Andry",
    //   status: "I am design master",
    //   location: { city: "Chelyabinsk", country: "Russia" },
    // },
    // {
    //   id: "3",
    //   followed: false,
    //   photoUrl:
    //     "https://resizer.mail.ru/p/bce30e81-2786-5ca0-8f7d-b26c06f54abf/AAACH5XkUaTUlqx164V3leYE7pp5s2ysSspxHyAWtKQCE0UBF3gzSrqoeQ4XJi_r7hKAiMGJE68LAlu-VFbwAikeSN0.jpg",
    //   fullName: "Dima",
    //   status: "I am a manager",
    //   location: { city: "Moscow", country: "Russia" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...action.users] };

    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAc = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
