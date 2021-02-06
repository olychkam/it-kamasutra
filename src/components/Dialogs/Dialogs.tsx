import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


export function Dialogs(props: DialogsPageType) {
    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    let addMessageRef=React.createRef<HTMLTextAreaElement>()
    const addMessage=()=>{
        alert(addMessageRef.current?.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={addMessageRef}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>addMessage</button>
            </div>
        </div>
    )
}