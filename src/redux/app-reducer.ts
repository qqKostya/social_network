import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType, InferActionsTypes } from "./redux-store";

let initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'app/INITIALIZES_SUCCESS':
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>



export const actions = {
  initializedSuccess: () => ({type: 'app/INITIALIZES_SUCCESS'} as const)
}



export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
