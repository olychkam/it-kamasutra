import React from 'react';
import s from './News.module.css';
type NewsType={
    title:string
}
export function News(props:NewsType){
    return(
        <div>{props.title}</div>
    )
}