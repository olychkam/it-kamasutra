const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>


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
    currentPage: number
}

export let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
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

        default:
            return state;
    }
}
export let followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId

    } as const
}
export let unFollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId

    } as const
}
export let setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users

    } as const
}
export let setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage

    } as const
}
export let setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}

export default usersReducer;