import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes, PostsType, StoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export type MyPostsContainerType = {

}

export function MyPostsContainer(props: MyPostsContainerType) {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostAC(store._state.profilePage.messageForNewPost))
                    store.dispatch(changeNewTextAC(''))
                }
                const newTextChangeHandler = (text: string) => {
                    store.dispatch(changeNewTextAC(text))
                }
                return(

                <div className={s.postsBlock}>
                    <MyPosts changeNewText={newTextChangeHandler} addPost={addPost} posts={state.profilePage.posts}
                             message={store._state.profilePage.messageForNewPost}/>
                </div>
                )
            }
        }
        </StoreContext.Consumer>

    )
}