import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../api/profile-api";
import userAPI from "../api/users-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { AppStateType } from "./redux-store";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";





let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: "It's my second post", likeCount: 25 },
    { id: 4, message: "It's my last post", likeCount: 30 },
  ] as Array<PostType>,

  profile: null as ProfileType | null,
  status: "",
  newPostText: ""
};


export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

type ActionsTypes = AddPostActionCreatorType | SetUserProfileType | SetStatusType | DeletePostType | SavePhotoSuccessType

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newMessageBody: string
}

export const addPostActionCreator = (newMessageBody: string): AddPostActionCreatorType => ({
  type: ADD_POST,
  newMessageBody,
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType):SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusType = {
  type: typeof SET_STATUS
   status: string
}

export const setStatus = (status:string): SetStatusType => ({ type: SET_STATUS, status });

type DeletePostType = {
  type: typeof DELETE_POST
   postId: number
}

export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId });

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await userAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId));
    }
  } else {
    setStatus(response.data.messages[0]);
    return Promise.reject(response.data.messages);
  }
};

export default profileReducer;
