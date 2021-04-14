import React, {FormEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {FormElementInput} from "../common/formsControls/FormsControls";
import {required} from "../../validators/validators";

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
                <Field name={'login'} component={FormElementInput}
                       placeholder={'login'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} component={FormElementInput}
                       placeholder={'Password'}
                       validate={[required]}
                type={'password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={FormElementInput}
                       type={'checkbox'}
                       validate={[required]}/>remember me
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