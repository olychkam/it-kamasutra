 import React, {FormEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
    onSubmit: (formData: number) => void
}
export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'Login'} component={'input'} placeholder={'Login'}/>
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
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'Login'
})(LoginForm)