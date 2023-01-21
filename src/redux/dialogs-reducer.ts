import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogsData: [
    { id: 1, name: "Kostya" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Artem" },
    { id: 4, name: "Lesha" },
    { id: 5, name: "Sasha" },
    { id: 6, name: "Ily" },
  ] as Array<DialogType>,
  messagesData: [
    { id: 1, message: "One" },
    { id: 2, message: "Two" },
    { id: 3, message: "Three" },
    { id: 4, message: "Four" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'dialogs/ADD-MESSAGE': {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: 5,
            message: action.newMessageBody,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export const actions = {
  addMessageActionCreator: (newMessageBody: string) => ({
    type: 'dialogs/ADD-MESSAGE',
    newMessageBody,
  } as const)
}

export default dialogsReducer;
