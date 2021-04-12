import React, {FormEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

export type FormDataType = {}
export const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} component={'textarea'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'addMessageForm'
})(AddMessageForm)