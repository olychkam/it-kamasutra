import React from 'react';
import {UsersApiPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import usersPhoto from '../../assets/images/users.png'
import {NavLink} from "react-router-dom";

export const Users = (props: UsersApiPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
<button onClick={getUsers}>get Users</button>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                   <NavLink to={'/profile'+u.id}>
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.user}/>
               </NavLink>
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