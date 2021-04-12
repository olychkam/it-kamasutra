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
                <Field name={'Login'} component={FormElementInput}
                       placeholder={'Login'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'Password'} component={FormElementInput}
                       placeholder={'Password'}
                       validate={[required]}/>
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