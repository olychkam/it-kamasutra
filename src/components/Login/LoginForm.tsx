import React, {FormEvent} from 'react';
import {Field, reduxForm } from 'redux-form'

type LoginFormType = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}
export const LoginForm = (props: LoginFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'Login'} component={'input'}  placeholder={'Login'}/>
            </div>
            <div>
                <Field name={'Password'} component={'input'} placeholder={'Password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm=reduxForm({
    form:'Login'
})(LoginForm)