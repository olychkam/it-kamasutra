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
} from "../../redux/store";

import {sendMessageBodyAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {
    /*dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void*/
}

export function DialogsContainer(props: DialogsPropsType) {
    /* let addMessageRef=React.createRef<HTMLTextAreaElement>()
     const addMessage=()=>{
         alert(addMessageRef.current?.value)
     }*/
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageBodyAC())
                    }

                    let onNewMessageChange = (body:string) => {
                        store.dispatch(updateNewMessageAC(body))
                    }
                    return <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}