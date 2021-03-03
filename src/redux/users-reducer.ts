const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS';

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC>|ReturnType<typeof setUsersAC>

type LocationType = {
    city: string
    country: string
}
type UsersType = {
    id: number
    status: string
    followed: boolean
    fullName: string
    location: LocationType
}

export type InitialStateType = {
    users: Array<UsersType>
}

export let initialState: InitialStateType = {
    users: [
        {
            id: 1,
            status: 'It\'s my first post',
            followed: false,
            fullName: 'Olya',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            status: 'It\'s my first post',
            followed: true,
            fullName: 'Katya',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            status: 'It\'s my first post',
            followed: false,
            fullName: 'Slava',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ],
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
       // case SETUSERS:



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
export let setUsersAC = (users: string) => {
    return {
        type: SETUSERS,
        users

    } as const
}

export default usersReducer;