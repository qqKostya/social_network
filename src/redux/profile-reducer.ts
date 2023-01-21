import { profileAPI } from "../api/profile-api";
import userAPI from "../api/users-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

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




const profileReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case 'profile/ADD-POST': {
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

    case 'profile/SET_USER_PROFILE': {
      return { ...state, profile: action.profile };
    }

    case 'profile/SET_STATUS': {
      return {
        ...state,
        status: action.status,
      };
    }

    case 'profile/DELETE_POST':
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };

    case 'profile/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newMessageBody: string) => ({
    type: 'profile/ADD-POST',
    newMessageBody,
  } as const),

  setUserProfile: (profile: ProfileType) => ({
    type: 'profile/SET_USER_PROFILE',
    profile,
  } as const),

  setStatus: (status:string) => ({ type: 'profile/SET_STATUS', status } as const),

  deletePost: (postId: number) => ({ type: 'profile/DELETE_POST', postId } as const),

  savePhotoSuccess: (photos: PhotosType) => ({
    type: 'profile/SAVE_PHOTO_SUCCESS',
    photos,
  } as const),
}


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await userAPI.getProfile(userId);
  dispatch(actions.setUserProfile(response.data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(response.data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(actions.setStatus(status));
  }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId));
    } else {
      throw new Error('userId cant be null')
    }
  } else {
    actions.setStatus(response.data.messages[0]);
    return Promise.reject(response.data.messages);
  }
};

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>