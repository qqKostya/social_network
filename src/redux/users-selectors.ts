import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getUsers2 = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsersSuperSelector = createSelector(getUsers2, (users) => {
  return users;
});

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFolowingInProgress = (state: AppStateType) => {
  return state.usersPage.folowingInProgress;
};

export const gerUsersFilter = (state: AppStateType) => {
  return state.usersPage.filter;
};
