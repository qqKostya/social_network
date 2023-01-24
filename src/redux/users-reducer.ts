import { Dispatch } from "redux";
import userAPI from "../api/users-api";
import { UsersType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";
import { InferActionsTypes, BaseThunkType } from "./redux-store";


let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  folowingInProgress: [] as Array<number>, // array of users ID
};



const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })

      };

    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      };

    case 'SET_USERS':
      return { ...state, users: action.users };

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };

    case 'SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.count };

    case 'TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };

    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        folowingInProgress: action.isFetching
          ? [...state.folowingInProgress, action.userId]
          : state.folowingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};


export const actions = {

  followSuccess: (userId: number) => ({
    type: 'FOLLOW',
    userId,
  } as const),



  unfollowSuccess: (userId: number) => ({
    type: 'UNFOLLOW',
    userId,
  } as const),



  setUsers: (users: Array<UsersType>) => ({
    type: 'SET_USERS',
    users,
  } as const),



  setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage,
  } as const),



  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount,
  } as const),



  toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching,
  } as const),

  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId,
  } as const),

}


export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return (dispatch) => {
    dispatch(actions.toggleIsFetching(true));

    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(actions.toggleIsFetching(false));
      dispatch(actions.setUsers(data.items));
      dispatch(actions.setTotalUsersCount(data.totalCount));
    });
  };
};

const _followUnfollowFlow = async (
  dispatch: CurrentDispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));

  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    userAPI.follow.bind(userAPI),
    actions.followSuccess
  );
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    userAPI.unfollow.bind(userAPI),
    actions.unfollowSuccess
  );
};

export default usersReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type CurrentDispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>