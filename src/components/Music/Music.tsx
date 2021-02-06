import React from 'react';
import s from './Music.module.css';

type MusicType={
    title:string
}

export function Music(props:MusicType){
    return(
        <div>{props.title}</div>
    )
}