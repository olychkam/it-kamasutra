import React from 'react';
import {ActionsTypes, InitialStateType, sendMessageBodyAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

type mapDispatchToPropsType={
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}
type mapStateToPropsType={
    dialogsPage:InitialStateType
    isAuth:boolean
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch:(action:ActionsTypes) => void):mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageBodyAC())
        },
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageAC(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
