import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Action,
} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import { ThunkAction } from "redux-thunk";
import chatReducer from "./chat-reducer";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  chat: chatReducer,
});

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>


export type BaseThunkType<A extends Action = Action, R = void> = ThunkAction<R, AppStateType, unknown, A>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.__store__ = store;

export default store;
