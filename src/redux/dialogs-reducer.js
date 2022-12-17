const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_POST = "UPDATE-NEW-MESSAGE-POST";

const dialogsReducer = (state, action) => {
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
