import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes, PostsType, StoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";

export type MyPostsContainerType = {
    store:StoreType
}

export function MyPostsContainer(props: MyPostsContainerType) {
    let state=props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostAC(props.store._state.profilePage.messageForNewPost))
        props.store.dispatch(changeNewTextAC(''))
    }
    const newTextChangeHandler = (text: string) => {
        props.store.dispatch(changeNewTextAC(text))
    }
    return (
        <div className={s.postsBlock}>
            <MyPosts changeNewText={newTextChangeHandler} addPost={addPost} posts={state.profilePage.posts}
                     message={props.store._state.profilePage.messageForNewPost}  />
        </div>

    )
}