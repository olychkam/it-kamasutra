import React from 'react';
import {UsersApiPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import usersPhoto from '../../assets/images/users.png'
import {inspect} from "util";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import Paginator from "../common/paginator/Paginator";

export type UsersPropsType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}
const UsersC = (props: UsersPropsType) => {

    return <div>
        <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.user}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed === true ?

                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>unFollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unFollow(u.id)

                        }}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                 <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
                </div>
            )}
    </div>
}


export default UsersC;