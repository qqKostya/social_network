import {ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-apy";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
  userId: null as (number | null),
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null , then capthca is not required
};

export type InitialStateType = typeof initialState 

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'auth/SET_USER_DATA':
    case 'auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};



type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA',
    data: { userId, login, email, isAuth },
  } as const ),

  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: 'auth/GET_CAPTCHA_URL_SUCCESS',
    data: { captchaUrl },
  } as const ),


}

type ThunkType = BaseThunkType<ActionsTypes>


export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();

  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, setStatus: any, captcha: any): ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);

    if (loginData.resultCode === ResultCodeEnum.Success) {
      dispatch(getAuthUserData());
    } else {
      if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      setStatus(loginData.messages);
    }
  };

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
