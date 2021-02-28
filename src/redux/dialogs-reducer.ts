import {ActionsTypes} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
export type InitialStateType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

export let initialState={
    dialogs: [
        {id: 1, name: 'Olya'},
        {id: 2, name: 'Irina'},
        {id: 3, name: 'Kostya'},
        {id: 4, name: 'Vova'},
        {id: 5, name: 'Karina'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'Yo'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state:InitialStateType=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}
export let updateNewMessageAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export let sendMessageBodyAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}
export default dialogsReducer;