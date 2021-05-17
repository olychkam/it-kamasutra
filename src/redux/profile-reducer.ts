import {profileAPI, usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SET_PHOTO_SUCCESS = 'SET-PHOTO-SUCCESS';

export type ActionProfileTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePostAC> |
    ReturnType<typeof setPhotoSuccess>

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string
    website: string,
    vk: string
    twitter: string
    instagram: string
    youtube: string,
    github: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type InitialStateType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: string
}
export let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'Hi, how are you??', likesCount: 48},
    ],
    profile: null as ProfileType | null,
    status: '',
}
const profileReducer = (state: InitialStateType = initialState, action: ActionProfileTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case "DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SET_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}
export let addPostAC = (messageForNewPost: string) => {
    return {
        type: ADD_POST,
        messageForNewPost
    } as const
}
export let deletePostAC = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}
export let setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export let setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const setPhotoSuccess = (photos: { small: string, large: string }) => ({
    type: SET_PHOTO_SUCCESS,
    photos
} as const)

export const getUserProfile = (userId: string): AppThunk =>
    async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
export const getStatus = (userId: string): AppThunk =>
    async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
export const updateStatus = (status: string): AppThunk =>
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
export const savePhoto = (file: string):AppThunk =>
    async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoSuccess(response.data.data.photos));
        }
    }
export default profileReducer;