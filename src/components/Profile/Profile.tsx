import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";


type ProfileType = {
    //posts: Array<PostsType>
    //message: string
    //store:StoreType
    //dispatch: (action: ActionsTypes) => void
}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}