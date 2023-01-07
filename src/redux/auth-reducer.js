import { authAPI } from "../api/api";
const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  // isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, login, email, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};
export const login =
  (email, password, rememberMe, setStatus) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      setStatus(response.data.messages);
    }
  };

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
