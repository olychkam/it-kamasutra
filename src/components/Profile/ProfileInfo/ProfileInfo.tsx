import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import Prealoder from "../../common/prealoder/Prealoder";
import users from "../../../assets/images/users.png";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto:(file:any)=>void
}

export function ProfileInfo(props: ProfileInfoType) {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (

        <div className={s.content}>

            {/*<div>
                <img
                    src="https://3.bp.blogspot.com/-j5oVTE2TNq8/XGRY4ZDjmyI/AAAAAAAABPU/LC7t1LjCaRMnIo442dZIcX-6s9cYuqNgwCLcBGAs/w1200-h630-p-k-no-nu/Desktop-Wallpaper-4.jpg"/>
            </div>*/}
            <img src={props.profile.photos.small || users} className={s.mainPhoto}/>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <div className={s.description}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}