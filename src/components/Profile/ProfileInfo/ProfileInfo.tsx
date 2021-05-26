import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import Prealoder from "../../common/prealoder/Prealoder";
import users from "../../../assets/images/users.png";
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileData} from './ProfileData/ProfileData';
import { ProfileDataForm } from './ProfileDataForm/ProfileDataForm';

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export function ProfileInfo(props: ProfileInfoType) {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
const [editMode,setEditMode]=useState<boolean>(false)
    return (

        <div className={s.content}>

            {/*<div>
                <img
                    src="https://3.bp.blogspot.com/-j5oVTE2TNq8/XGRY4ZDjmyI/AAAAAAAABPU/LC7t1LjCaRMnIo442dZIcX-6s9cYuqNgwCLcBGAs/w1200-h630-p-k-no-nu/Desktop-Wallpaper-4.jpg"/>
            </div>*/}
            <img src={props.profile.photos.small || users} className={s.mainPhoto}/>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {editMode ? <ProfileDataForm profile={props.profile} isOwner={props.isOwner}/> :
                <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
            <div className={s.description}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}


type PropsType = {
    contactTitle: string,
    contactValue: string | null
}
export const Contact: React.FC<PropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}