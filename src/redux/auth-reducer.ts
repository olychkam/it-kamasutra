import {ProfileType} from "./profile-reducer";

const SET_USER_DATA = 'SET-USER-DATA';

export type ActionsTypes = ReturnType<typeof setUserData>

export type UserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
}

export type InitialStateType = {
    data:UserDataType,
    isAuth:boolean
}
let InitialState:InitialStateType={
    data:{} as UserDataType,
    isAuth:false
}


const authReducer = (state: InitialStateType=InitialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data:{...action.data,...state.data},
                //...action.data,
                isAuth:true
            };
        default:
            return state;
    }
}
export let setUserData = (data: UserDataType) => {
    return {
        type: SET_USER_DATA,
        data
    } as const
}

export default authReducer;