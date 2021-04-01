import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getUserData, UserDataType} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    data: UserDataType
}
type mapDispatchToPropsType = {
    getUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getUserData()    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    data: state.auth.data

});

export default connect(mapStateToProps, {getUserData})(HeaderContainer);