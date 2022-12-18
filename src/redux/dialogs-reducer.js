const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_POST = "UPDATE-NEW-MESSAGE-POST";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: "5",
        message: state.newMessageText,
      };

      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_POST:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessagePostActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_POST,
  newText: text,
});

export default dialogsReducer;
