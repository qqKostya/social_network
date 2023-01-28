import { AppStateType } from "./redux-store"


export const selectIsAuth = (state: AppStateType) => {
   return state.auth.isAuth
}

export const selectCurrentUserLogin = (state: AppStateType) => {
   return state.auth.login
}

export const selectByPhoto = (state: AppStateType) => {
  return state.profilePage.profile?.photos.small
}