import React from 'react';
import {UsersApiPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import usersPhoto from '../../assets/images/users.png'
import {inspect} from "util";
import {setCurrentPage, setToggleIsFetching, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

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
    setToggleIsFetching: (isFetching: boolean) => void

}
const UsersC = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
        </div>
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

                        <button onClick={() => {
                            props.setToggleIsFetching(false)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'bac44229-6d89-4751-9bb8-e457dc22d531'
                                }
                            })

                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    props.setToggleIsFetching(true)
                                })


                        }}>unFollow</button>

                        : <button onClick={() => {
                            props.setToggleIsFetching(true)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'bac44229-6d89-4751-9bb8-e457dc22d531'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.setToggleIsFetching(false)
                                })

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