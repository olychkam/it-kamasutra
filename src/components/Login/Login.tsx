import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect, useDispatch} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {StateType} from "../../redux/redux-store";

type LoginType = {
    login: (login: string, password: string, rememberMe: boolean) => void
}
const Login = (props: LoginType) => {
    //let dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        //dispatch(login(formData.login, formData.password, formData.rememberMe))
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    /* if (props.isAuth) {
         return <Redirect to={'/profile'}/>
     }*/
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {login})(Login)
//export default Login
