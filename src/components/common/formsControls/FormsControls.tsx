import React, {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'

type TextareaType = {}

export const FormsControls: React.FC<WrappedFieldProps> = (
    {meta, input,child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>{props.child}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (
    {meta, input, ...props}) => {
    return (
            <FormsControls {...props}><textarea {...input} {...props}/></FormsControls>
    )
}
export const Input: React.FC<WrappedFieldProps> = (
    {meta, input, ...props}) => {
    return (
        <FormsControls {...props}><input {...input} {...props}/></FormsControls>
    )
}