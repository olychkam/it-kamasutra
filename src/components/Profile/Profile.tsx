import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";
import {ProfileType, updateStatus} from "../../redux/profile-reducer";


type ProfileTypes = {
    profile:ProfileType
    status:string
    updateStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(file:any)=>void
    //posts: Array<PostsType>
    //message: string
    //store:StoreType
    //dispatch: (action: ActionsTypes) => void
}

export function Profile(props: ProfileTypes){
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}