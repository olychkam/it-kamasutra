const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC>

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = {
    posts: Array<PostsType>
    messageForNewPost: string
}

export let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 1, message: 'Hi, how are you??', likesCount: 48},
    ],
    messageForNewPost: ''
}
const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }

        case CHANGE_NEW_POST_TEXT: {
            return {
                ...state,
                messageForNewPost: action.newText
            };
        }
        default:
            return state;
    }
}
export let addPostAC = () => {
    return {
        type: ADD_POST,

    } as const
}
export let changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export default profileReducer;