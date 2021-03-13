import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import usersPhoto from '../../assets/images/users.png'
import {inspect} from "util";
import {setCurrentPageAC} from "../../redux/users-reducer";


class UsersC extends React.Component<UsersPropsType> {
    /* constructor(props:UsersPropsType) {
         super(props);
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             props.setUsers(response.data.items)
         })
     }*/
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&
        count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&
        count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        this.onPageChanged(p)
                    }} className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.user}/>
                </div>
                <div>
                    {u.followed === true ? <button onClick={() => {
                        this.props.unFollow(u.id)
                    }}>unFollow</button> : <button onClick={() => {
                        this.props.follow(u.id)
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
}

export default UsersC;