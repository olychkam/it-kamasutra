import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/redux-store";
import {
    ActionsTypes,
    followAC,
    setCurrentPageAC, setToggleIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersC from "./UsersС";
import React from "react";
import axios from "axios";
import preolader from '../../assets/images/preolader1.gif'
import Prealoder from "../common/prealoder/Prealoder";

export type mapStateToPropsType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetchingAC: (isFetching: boolean) => void
}

export type UsersApiPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersApiPropsType> {
    /* constructor(props:UsersPropsType) {
         super(props);
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             props.setUsers(response.data.items)
         })
     }*/
    componentDidMount(): void {
        {this.props.setToggleIsFetchingAC(true)}
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&
        count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
            {this.props.setToggleIsFetchingAC(false)}

        })
    }

    onPageChanged = (pageNumber: number) => {
        {this.props.setToggleIsFetchingAC(true)}
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&
        count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                {this.props.setToggleIsFetchingAC(false)}

            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Prealoder/>: null}
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
            />
        </>
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);