import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type HeaderType = {
    //userData: UserDataType
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    logout:()=>void

}

export function Header(props: HeaderType) {
    debugger
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={()=> {props.logout()}}>Log out</button></div>
                    :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>

        </header>
    )
}