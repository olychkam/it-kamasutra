import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingIsProgress, unFollow,
    UsersType
} from "../../redux/users-reducer";
import {compose} from "redux";
import UsersC from "./UsersС";
import React from "react";
import Prealoder from "../common/prealoder/Prealoder";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

export type mapStateToPropsType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>

}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleFollowingIsProgress: (isFetching: boolean, userId: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    requestUsers: (currentPage: any, pageSize: any) => void
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
        let {currentPage, pageSize}=this.props
        this.props.requestUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        /* {
             this.props.setToggleIsFetching(true)
         }
         this.props.setCurrentPage(pageNumber);
         usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                 this.props.setUsers(data.items)
                 {
                     this.props.setToggleIsFetching(false)
                 }

             })*/
        let {pageSize}=this.props;
        this.props.requestUsers(pageNumber,pageSize);

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
                    followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const
    mapStateToProps = (state: StateType)=> {
        return {
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state)
        }
    }

export default compose<React.ComponentType>(
    //withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingIsProgress,
        setToggleIsFetching,
        requestUsers
    })
)(UsersContainer)

