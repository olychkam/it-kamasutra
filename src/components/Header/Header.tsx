import React from 'react';
import s from './Header.module.css';
export function Header(){
    return(
            <header className={s.header}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png"/>
            </header>
    )
}