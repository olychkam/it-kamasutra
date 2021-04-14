import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Header, HeaderType} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getUserData, InitialStateType, logout} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    // userData: UserDataType
    //state:InitialStateType
    login: string | null
    id: number | null
    email: string | null


}
type mapDispatchToPropsType = {
    getUserData: () => void
    logout: () => void


}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    // userData: state.auth.userData
    //state:state.auth
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email

});

export default connect(mapStateToProps, {getUserData, logout})(HeaderContainer);