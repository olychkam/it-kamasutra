import {ProfileType} from "./profile-reducer";
import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingIsProgress, unFollowSuccess} from "./users-reducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppThunk, StateType} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA';

export type ActionsAuthTypes = ReturnType<typeof setUserData>

/*export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
}*/
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let InitialState: InitialStateType = {
    //userData: {} as UserDataType,
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export type SetDataToAuthStateType = {
    type: 'SET-USER-DATA'
    payload: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}
export type AuthActionTotalType = SetDataToAuthStateType
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


const authReducer = (state: InitialStateType = InitialState, action: AuthActionTotalType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                // userData:{...action.data, ...state.userData},
                //...action .data,
            };
        default:
            return state;
    }
}
export let setUserData = (id: number | null, email: string | null,
                          login: string | null, isAuth: boolean): SetDataToAuthStateType => {
    return {
        type: SET_USER_DATA,
        payload: {
            id, email, login, isAuth
        }
    } as const
}
export const getUserData = (): AppThunk => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}
export const login = (email: string | null, password: string | null, rememberMe: boolean): AppThunk =>
    (dispatch) => {
        debugger
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getUserData())
                }
            })

    }
export const logout = (): AppThunk =>
    (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {

                    dispatch(setUserData(null, null, null, false))
                }
            })

    }

export default authReducer;