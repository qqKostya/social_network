import userAPI from '../api/api'
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postData: [
    { id: "1", message: "Hi, how are you?", likeCount: 15 },
    { id: "2", message: "It's my first post", likeCount: 20 },
    { id: "3", message: "It's my second post", likeCount: 25 },
    { id: "4", message: "It's my last post", likeCount: 30 },
  ],
  newPostText: "samurai",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "5",
        message: state.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});


export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export default profileReducer;
