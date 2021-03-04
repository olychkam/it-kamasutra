const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC>|ReturnType<typeof setUsersAC>

export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    status: string
    followed: boolean
    fullName: string
    location: LocationType
    photoUrl:string
}

export type InitialStateType = {
    users: Array<UsersType>
}

export let initialState: InitialStateType = {
    users: []
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
      case SET_USERS:
          return{
              ...state,
              users:[...state.users, ...action.users]
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

export default usersReducer;