import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import usersPhoto from '../../assets/images/users.png'
import {render} from "react-dom";

 class Users extends React.Component {
    constructor(props:UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
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