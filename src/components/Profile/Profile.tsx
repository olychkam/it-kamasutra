import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileTypes = {
    profile:ProfileType
    status:string
    updateStatus:string
    //posts: Array<PostsType>
    //message: string
    //store:StoreType
    //dispatch: (action: ActionsTypes) => void
}

export function Profile(props: ProfileTypes){
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}