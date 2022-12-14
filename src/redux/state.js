let rerenderEntireTree = () => {
  console.log("State changed");
};

const state = {
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
    newMessageText: "new message",
  },
};

export const addPost = () => {
  const newPost = {
    id: "5",
    message: state.profilePage.newPostText,
    likeCount: 0,
  };

  state.profilePage.postData.push(newPost);
  rerenderEntireTree(state);
  state.profilePage.newPostText = "";
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

// homework
export const addMessage = () => {
  const newMessage = {
    id: "5",
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messagesData.push(newMessage);
  rerenderEntireTree(state);
  state.dialogsPage.newMessageText = "";
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
