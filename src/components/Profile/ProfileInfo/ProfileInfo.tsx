import React from 'react';
import s from './ProfileInfo.module.css';
import Prealoder from "../../common/prealoder/Prealoder";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType={
    profile:ProfileType
    status:string
    updateStatus:string
}

export function ProfileInfo(props:ProfileInfoType) {

    return (

        <div className={s.content}>

            {/*<div>
                <img
                    src="https://3.bp.blogspot.com/-j5oVTE2TNq8/XGRY4ZDjmyI/AAAAAAAABPU/LC7t1LjCaRMnIo442dZIcX-6s9cYuqNgwCLcBGAs/w1200-h630-p-k-no-nu/Desktop-Wallpaper-4.jpg"/>
            </div>*/}
            <img src={props.profile.photos.small}/>
            <div className={s.description}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}