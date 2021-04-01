import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import Prealoder from "../common/prealoder/Prealoder";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";


/*type ProfileType = {
    //posts: Array<PostsType>
    //message: string
    //store:StoreType
    //dispatch: (action: ActionsTypes) => void
}*/
type mapStateToPropsType = {
    profile: ProfileType | null
    isAuth:boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type PatchParamsType = {
    userId: string
}
type onProfileContainerType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerType = RouteComponentProps<PatchParamsType> & onProfileContainerType

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth)return <Redirect to={'/login'}/>
        if (!this.props.profile) {
            return <Prealoder/>
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);