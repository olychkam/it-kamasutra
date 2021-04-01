import React from 'react';
import {ActionsTypes, InitialStateType, sendMessageBodyAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapDispatchToPropsType={
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}
type mapStateToPropsType={
    dialogsPage:InitialStateType
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
