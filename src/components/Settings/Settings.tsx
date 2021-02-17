import React from 'react';

type SettingsType={
    title:string
}
export function Settings(props:SettingsType){
    return(
        <div>{props.title}</div>
    )
}