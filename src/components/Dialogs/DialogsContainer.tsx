import React from 'react';
import {ActionsTypes, RootStateType} from "../../redux/store";
import {InitialStateType, sendMessageBodyAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type mapDispatchToPropsType={
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}
type mapStateToPropsType={
    dialogsPage:InitialStateType
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: RootStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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
