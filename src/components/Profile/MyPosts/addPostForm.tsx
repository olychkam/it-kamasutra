import {Field, reduxForm, InjectedFormProps} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";

type FormDataPostType = {
    messageForNewPost: string
}
const maxLength10 = maxLengthCreator(10)

export const AddPostForm = (props: InjectedFormProps<FormDataPostType>) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>

                <Field name={'messageForNewPost'} component={Textarea}
                       placeholder={'Enter your post'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}
export const AddPostReduxForm = reduxForm<FormDataPostType>({
    form: 'AddPostForm'
})(AddPostForm)