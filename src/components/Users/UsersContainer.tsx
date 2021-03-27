import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setToggleIsFetching, setTotalUsersCount, setUsers, toggleFollowingIsProgress,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersC from "./UsersС";
import React from "react";
import axios from "axios";
import preolader from '../../assets/images/preolader1.gif'
import Prealoder from "../common/prealoder/Prealoder";
import {usersAPI} from "../../api/api";

export type mapStateToPropsType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:Array<number>

}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleFollowingIsProgress:(isFetching:boolean,userId:number)=>void
    setToggleIsFetching:(isFetching:boolean)=>void
}

export type UsersApiPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersApiPropsType> {
    /* constructor(props:UsersPropsType) {
         super(props);
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             props.setUsers(response.data.items)
         })
     }*/
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setToggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        {
            this.props.setToggleIsFetching(true)
        }
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                {
                    this.props.setToggleIsFetching(false)
                }

            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Prealoder/> : null}
            <UsersC currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    pageSize={this.props.pageSize}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    setUsers={this.props.setUsers}
                    totalUsersCount={this.props.totalUsersCount}
                    unFollow={this.props.unFollow}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    toggleFollowingIsProgress={this.props.toggleFollowingIsProgress}
                    followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const
    mapStateToProps = (state: StateType): mapStateToPropsType => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress:state.usersPage.followingInProgress
        }
    }
/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setToggleIsFetchingAC: (isFetching: boolean) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }
    }
}*/


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingIsProgress,
    setToggleIsFetching
})

(
    UsersContainer
);