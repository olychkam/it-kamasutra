import React from 'react';
import {LoginReduxForm} from "./LoginForm";

type LoginType = {}
export const Login = (props: LoginType) => {
    const onSubmit = (formData:any) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}