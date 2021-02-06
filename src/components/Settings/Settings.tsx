import React from 'react';
import s from './Settings.module.css';

type SattingsType={
    title:string
}
export function Settings(props:SattingsType){
    return(
        <div>{props.title}</div>
    )
}