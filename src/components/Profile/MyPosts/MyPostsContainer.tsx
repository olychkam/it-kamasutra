import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, changeNewTextAC, InitialStateType} from "../../../redux/profile-reducer";
import {ActionsTypes} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";

/*
export type MyPostsContainerType = {}

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
                    return (

                        <div className={s.postsBlock}>
                            <MyPosts changeNewText={newTextChangeHandler} addPost={addPost}
                                     posts={state.profilePage.posts}
                                     message={store._state.profilePage.messageForNewPost}/>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}
*/
type mapDispatchToPropsType={
    newTextChangeHandler:(text:string)=>void
    addPost:()=>void
}
type mapStateToPropsType={
    profilePage:InitialStateType

}
export type MyPostsType=mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        profilePage: state.profileReducer
    }
}
const mapDispatchToProps = (dispatch:(action:ActionsTypes) => void):mapDispatchToPropsType => {
    return {
        addPost:()=>{
            dispatch(addPostAC())
            dispatch(changeNewTextAC(''))
        },
        newTextChangeHandler:(text:string)=>{
            dispatch(changeNewTextAC(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostContainer;