import {ProfileType} from "./profile-reducer";
import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingIsProgress, unFollowSuccess} from "./users-reducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA';

export type ActionsTypes = ReturnType<typeof setUserData>

export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type InitialStateType = {
   userData:UserDataType,
    isAuth: boolean
}
let InitialState: InitialStateType = {
    userData: {} as UserDataType,
    isAuth: false,
}
/*
export type SetDataToAuthStateType = {
    type: 'SET-USER-DATA'
    payload: {
        id: number | null
        login: string | null
        email: string | null
    }
}
*/


const authReducer = (state: InitialStateType = InitialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                //...action.payload,
                userData:{...action.data, ...state.userData},
                //...action .data,
            };
        default:
            return state;
    }
}
export let setUserData = (data:UserDataType|null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data,
        isAuth
    } as const
}
export const getUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                //let {id, email, login} = response.data.data
                dispatch(setUserData(response.data.data, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch:any) => {
    debugger
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData())
            }
        })

}
export const logout = () => (dispatch: any) => {

    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {

                dispatch(setUserData(null, false))
            }
        })

}

export default authReducer;