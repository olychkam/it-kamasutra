import React from 'react';
import {ActionsDialogsTypes, InitialStateType, sendMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapDispatchToPropsType = {

    sendMessage: (newMessageBody:any) => void
}
type mapStateToPropsType = {
    dialogsPage: InitialStateType
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsDialogsTypes) => void): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:any) => {
            dispatch(sendMessageBodyAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
