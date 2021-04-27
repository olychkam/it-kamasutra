import {authAPI} from "../api/api";
import {getUserData} from "./auth-reducer";
import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";


const SET_INITIALIZED = 'SET-INITIALIZED';

export type ActionsAppTypes = ReturnType<typeof setInitializedSuccess>


export type InitialStateType = {
    initialized: boolean
}
let InitialState: InitialStateType = {
    //userData: {} as UserDataType,
    initialized: false
}
const appReducer = (state: InitialStateType = InitialState, action: ActionsAppTypes): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
export let setInitializedSuccess = () => {
    return {
        type: SET_INITIALIZED,

    } as const
}
export const initialize = () =>
    (dispatch: any) => {
        dispatch(getUserData())
            .then(() => {
                dispatch(setInitializedSuccess())

            })
    }
export default appReducer;