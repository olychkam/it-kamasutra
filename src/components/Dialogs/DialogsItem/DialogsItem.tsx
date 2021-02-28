import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
export type DialogsType = {
    id: number
    name: string
}

export function DialogsItem(props: DialogsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    )
}