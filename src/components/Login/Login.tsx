import React from 'react';
import {LoginForm} from "./LoginForm";
import {connect, useDispatch} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {StateType} from "../../redux/redux-store";

type LoginType = {
    login: (login: string, password: string, rememberMe: boolean) => void
}
const Login = (props: LoginType) => {
    //let dispatch = useDispatch()

    /* if (props.isAuth) {
         return <Redirect to={'/profile'}/>
     }*/
    return <div>
        <h1>Login</h1>
      <LoginForm/>
    </div>
}

export default connect(null, {login})(Login)
//export default Login
