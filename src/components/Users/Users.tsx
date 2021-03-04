import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl:'https://avatanplus.com/files/resources/original/5874cc4e82d9c159883e12c8.png',
                status: 'It\'s my first post',
                followed: false,
                fullName: 'Olya',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl:'https://avatanplus.com/files/resources/original/5874cc4e82d9c159883e12c8.png',
                status: 'It\'s my first post',
                followed: true,
                fullName: 'Katya',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl:'https://avatanplus.com/files/resources/original/5874cc4e82d9c159883e12c8.png',
                status: 'It\'s my first post',
                followed: false,
                fullName: 'Slava',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

    return <div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.user}/>
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
                 <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            </div>
        )}
    </div>
}