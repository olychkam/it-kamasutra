const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';


export type DialogsType = {
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
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It\'s my first post', likesCount: 23},
                {id: 1, message: 'Hi, how are you?', likesCount: 48},
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
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._onChange()
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._onChange()
        }else if(action.type===SEND_MESSAGE){
            let body=this._state.dialogsPage.newMessageBody

        }
    }
}
export let addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export let changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export let updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}


export default store;