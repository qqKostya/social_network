const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_POST = "UPDATE-NEW-MESSAGE-POST";

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

  // addPost() {
  //   const newPost = {
  //     id: "5",
  //     message: this._state.profilePage.newPostText,
  //     likeCount: 0,
  //   };

  //   this._state.profilePage.postData.push(newPost);
  //   this._callSubscriber(this._state);
  //   this._state.profilePage.newPostText = "";
  // },

  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  // addMessage() {
  //   const newMessage = {
  //     id: "5",
  //     message: this._state.dialogsPage.newMessageText,
  //   };

  //   this._state.dialogsPage.messagesData.push(newMessage);
  //   this._callSubscriber(this._state);
  //   this._state.dialogsPage.newMessageText = "";
  // },

  // updateNewMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: "5",
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };

      this._state.profilePage.postData.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: "5",
        message: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messagesData.push(newMessage);
      this._callSubscriber(this._state);
      this._state.dialogsPage.newMessageText = "";
    } else if (action.type === UPDATE_NEW_MESSAGE_POST) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessagePostActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_POST,
  newText: text,
});

// let rerenderEntireTree = () => {
//   console.log("State changed");
// };

// const state = {
//   profilePage: {
//     postData: [
//       { id: "1", message: "Hi, how are you?", likeCount: 15 },
//       { id: "2", message: "It's my first post", likeCount: 20 },
//       { id: "3", message: "It's my second post", likeCount: 25 },
//       { id: "4", message: "It's my last post", likeCount: 30 },
//     ],
//     newPostText: "samurai",
//   },
//   dialogsPage: {
//     dialogsData: [
//       { id: "1", name: "Kostya" },
//       { id: "2", name: "Andrey" },
//       { id: "3", name: "Artem" },
//       { id: "4", name: "Lesha" },
//       { id: "5", name: "Sasha" },
//       { id: "6", name: "Ily" },
//     ],
//     messagesData: [
//       { id: "1", message: "One" },
//       { id: "2", message: "Two" },
//       { id: "3", message: "Three" },
//       { id: "4", message: "Four" },
//     ],
//     newMessageText: "new message",
//   },
// };

// export const addPost = () => {
//   const newPost = {
//     id: "5",
//     message: state.profilePage.newPostText,
//     likeCount: 0,
//   };

//   state.profilePage.postData.push(newPost);
//   rerenderEntireTree(state);
//   state.profilePage.newPostText = "";
// };

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

// homework
// export const addMessage = () => {
//   const newMessage = {
//     id: "5",
//     message: state.dialogsPage.newMessageText,
//   };

//   state.dialogsPage.messagesData.push(newMessage);
//   rerenderEntireTree(state);
//   state.dialogsPage.newMessageText = "";
// };

// export const updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree(state);
// };

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// };

export default store;
window.state = store;
