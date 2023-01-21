import { getAuthUserData } from "./auth-reducer";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
  initialized: false,
};



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




export const actions = {
  initializedSuccess: () => ({type: 'app/INITIALIZES_SUCCESS'} as const)
}



export const initializeApp = (): ThunkAction => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;


type ThunkAction = BaseThunkType<ActionsTypes>
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>