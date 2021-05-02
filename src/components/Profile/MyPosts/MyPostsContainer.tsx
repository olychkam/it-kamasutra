import React from 'react';
import {addPostAC, InitialStateType} from "../../../redux/profile-reducer";
import {MemoizedMyPosts, MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapDispatchToPropsType={
    addPost:(messageForNewPost:any)=>void
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
        addPost:(messageForNewPost:string)=>{
            dispatch(addPostAC(messageForNewPost))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MemoizedMyPosts);
export default MyPostContainer;