import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {UserDataType} from "../../redux/auth-reducer";

type HeaderType = {
    data: UserDataType
    isAuth: boolean
}

export function Header(props: HeaderType) {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.data.login :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>

        </header>
    )
}