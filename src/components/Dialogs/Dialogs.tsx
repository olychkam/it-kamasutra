import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from 'react-router-dom';
import {AddMessageReduxForm} from "./addMessageForm";


/*export type DialogsPropsType = {
    /!*dialogs: Array<DialogsType>
    messages: Array<MessagesType>*!/
    sendMessage: () => void
    //dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsPageType
}*/

export function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
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
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}