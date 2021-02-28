import s from "../Dialogs.module.css";
import React from "react";
type MessagesType={
    message:string
    id?:number
}
export function Message(props: MessagesType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
