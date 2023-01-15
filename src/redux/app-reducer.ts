import { getAuthUserData } from "./auth-reducer";

const INITIALIZES_SUCCESS = "app/INITIALIZES_SUCCESS";


export type InitialStateType = {
  initialized: boolean,

}

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessType = {
  type: typeof INITIALIZES_SUCCESS // "app/INITIALIZES_SUCCESS";
}

export const initializedSuccess = (): InitializedSuccessType => ({
  type: INITIALIZES_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
