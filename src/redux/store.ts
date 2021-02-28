import {addPostAC, changeNewTextAC} from "./profile-reducer";
import {sendMessageBodyAC, updateNewMessageAC} from "./dialogs-reducer";

/*export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void*/
//}
export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC>|ReturnType<typeof updateNewMessageAC> |
ReturnType<typeof sendMessageBodyAC>


/*
const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It\'s my first post', likesCount: 23},
                {id: 1, message: 'Hi, how are you??', likesCount: 48},
            ],
            messageForNewPost: ''
        },
        dialogsPage: {
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
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._onChange();


    }
}

*/

//export default store;