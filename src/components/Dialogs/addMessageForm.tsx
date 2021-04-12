import React, {FormEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from "../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../validators/validators";

export type FormDataType = {
    newMessageBody: string
}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'}
                       component={Textarea}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength50]}/>
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