import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType } from "./redux-store";

const INITIALIZES_SUCCESS = "app/INITIALIZES_SUCCESS";


export type InitialStateType = {
  initialized: boolean,

}

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case INITIALIZES_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type ActionsTypes = InitializedSuccessType

type InitializedSuccessType = {
  type: typeof INITIALIZES_SUCCESS // "app/INITIALIZES_SUCCESS";
}

export const initializedSuccess = (): InitializedSuccessType => ({
  type: INITIALIZES_SUCCESS,
});

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
