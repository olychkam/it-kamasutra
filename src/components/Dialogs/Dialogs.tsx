import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,
    DialogsType,
    MessagesType,
} from "../../redux/state";

import {sendMessageBodyAC, updateNewMessageAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageBodyAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageAC(body))
    }
    /* let addMessageRef=React.createRef<HTMLTextAreaElement>()
     const addMessage=()=>{
         alert(addMessageRef.current?.value)
     }*/
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message'></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>addMessage</button>
            </div>
        </div>
    )
}