import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux/state";

type ProfileType = {
    posts: Array<PostsType>
    message: string
    dispatch: (action: ActionsTypes) => void
}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     message={props.message}

                     dispatch={props.dispatch}
            />
        </div>
    )
}