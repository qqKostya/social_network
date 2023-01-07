import userAPI, { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postData: [
    { id: "1", message: "Hi, how are you?", likeCount: 15 },
    { id: "2", message: "It's my first post", likeCount: 20 },
    { id: "3", message: "It's my second post", likeCount: 25 },
    { id: "4", message: "It's my last post", likeCount: 30 },
  ],

  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "5",
        message: action.newMessageBody,
        likeCount: 0,
      };

      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newMessageBody) => ({
  type: ADD_POST,
  newMessageBody,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
