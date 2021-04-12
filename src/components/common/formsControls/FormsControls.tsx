import React, {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'

type TextareaType = {}

export const FormsControls = (Element: string) => ({input, meta, ...props}: WrappedFieldProps &
    InputHTMLAttributes<HTMLInputElement>) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            <Element className={meta.touched && meta.error ? styles.error : ''} {...input} {...props}/>
            {hasError && <span className={styles.spanError}>{meta.error}</span>}
        </>
    )
}
export const FormElementInput = FormsControls('input')
export const FormElementTextArea = FormsControls('textarea')