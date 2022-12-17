import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: "1", message: "Hi, how are you?", likeCount: 15 },
        { id: "2", message: "It's my first post", likeCount: 20 },
        { id: "3", message: "It's my second post", likeCount: 25 },
        { id: "4", message: "It's my last post", likeCount: 30 },
      ],
      newPostText: "samurai",
    },
    dialogsPage: {
      dialogsData: [
        { id: "1", name: "Kostya" },
        { id: "2", name: "Andrey" },
        { id: "3", name: "Artem" },
        { id: "4", name: "Lesha" },
        { id: "5", name: "Sasha" },
        { id: "6", name: "Ily" },
      ],
      messagesData: [
        { id: "1", message: "One" },
        { id: "2", message: "Two" },
        { id: "3", message: "Three" },
        { id: "4", message: "Four" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("State changed");
  },

  geState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};





export default store;
window.state = store;
