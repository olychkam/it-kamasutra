import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

import {MyPostsType} from "./MyPostsContainer";

/*export type MyPostsType = {
   posts: Array<PostsType>
   message: string
    //dispatch: (action: ActionsTypes) => void
    changeNewText:(text:string)=>void
    addPost:()=>void

}*/

export function MyPosts(props: MyPostsType) {
    let postsElement = props.profilePage.posts.map
    (p => <Post message={p.message}
                likesCount={p.likesCount}
                id={p.id}
    />)
    const onAddPost = () => {
        props.addPost()
       // props.dispatch(addPostAC(props.message))
        props.newTextChangeHandler('')
       // props.dispatch(changeNewTextAC(''))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.newTextChangeHandler(text)
       // props.dispatch(changeNewTextAC(text))
    }
    return (
        <div className={s.postsBlock}>
            <h3>Hi</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.messageForNewPost}
                              onChange={newTextChangeHandler}>
                    </textarea></div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}