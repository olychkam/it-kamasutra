import {ActionsTypes, PostsType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';


let initialState={
        posts: [
            {id: 1, message: 'It\'s my first post', likesCount: 23},
            {id: 1, message: 'Hi, how are you??', likesCount: 48},
        ],
        messageForNewPost: ''
    }
const profileReducer = (state=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText
            return state;
        default:
            return state;
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
export default profileReducer;