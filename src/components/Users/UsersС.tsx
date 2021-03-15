import React from 'react';
import {UsersApiPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import usersPhoto from '../../assets/images/users.png'
import {inspect} from "util";
import {setCurrentPage, UsersType} from "../../redux/users-reducer";

export type UsersPropsType={
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged:(pageNumber:number)=>void

}
const UsersC=(props:UsersPropsType)=>{

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
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.user}/>
                </div>
                <div>
                    {u.followed === true ? <button onClick={() => {
                        props.unFollow(u.id)
                    }}>unFollow</button> : <button onClick={() => {
                        props.follow(u.id)
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