import React from 'react';
import {addPostAC, changeNewTextAC, InitialStateType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

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
    newTextChangeHandler:(newText:string)=>void
    addPost:()=>void
}
type mapStateToPropsType={
    profilePage:InitialStateType
    messageForNewPost:InitialStateType

}
export type MyPostsType=mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        profilePage:state.profilePage,
        messageForNewPost:state.profilePage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        newTextChangeHandler:(newText:string)=>{
            dispatch(changeNewTextAC(newText))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostContainer;