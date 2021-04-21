import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

export type ActionsTypes = ReturnType<typeof followSuccess> |
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
const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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

export const requestUsers=(currentPage:any, pageSize:any)=>{
    return(dispatch:any)=>{
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage,pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setToggleIsFetching(false))
            })
    }
}
export const follow=(userId:number)=>{
    return(dispatch:any)=>{
        dispatch(toggleFollowingIsProgress(false,userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingIsProgress(true,userId))
            })
    }
}
export const unFollow=(userId:number)=>{
    return(dispatch:any)=>{
        dispatch(toggleFollowingIsProgress(true,userId))
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingIsProgress(false,userId))
            })
    }
}

export default usersReducer;