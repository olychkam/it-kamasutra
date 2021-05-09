import {usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../validators/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

export type ActionsUsersTypes = ReturnType<typeof followSuccess> |
    ReturnType<typeof unFollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setToggleIsFetching> |
    ReturnType<typeof toggleFollowingIsProgress>


export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    status: string | null
    followed: boolean
    name: string
    location: LocationType
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type InitialStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>        //?????any
}

export let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
const usersReducer = (state: InitialStateType = initialState, action: ActionsUsersTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id',
                    {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id',
                    {followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }

        default:
            return state;
    }
}
export let followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId

    } as const
}
export let unFollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId

    } as const
}
export let setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users

    } as const
}
export let setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage

    } as const
}
export let setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}
export let setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export let toggleFollowingIsProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}

export const requestUsers = (currentPage: any, pageSize: any): AppThunk => {
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setToggleIsFetching(false))
    }
}
export const followUnfollowFlow = async (dispatch: Dispatch, apiMethod: any, userId: any, actionCreator: any) => {
    dispatch(toggleFollowingIsProgress(false, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingIsProgress(true, userId))
}

export const follow = (userId: number): AppThunk => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(userId);
        let actionCreator = unFollowSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unFollow = (userId: number): AppThunk => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unFollow.bind(userId);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}

export default usersReducer;