const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: "5",
            message: action.newMessageBody,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
