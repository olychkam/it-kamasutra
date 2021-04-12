import {Field, reduxForm, InjectedFormProps} from "redux-form";
import React from "react";

type FormDataPostType = {}
export const AddPostForm = (props: InjectedFormProps<FormDataPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'messageForNewPost'} component={'textarea'} placeholder={'Enter your post'}/>
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