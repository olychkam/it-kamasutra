import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileType, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import Prealoder from "../common/prealoder/Prealoder";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


/*type ProfileType = {
    //posts: Array<PostsType>
    //message: string
    //store:StoreType
    //dispatch: (action: ActionsTypes) => void
}*/
type mapStateToPropsType = {
    profile: ProfileType | null
    status:string,
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
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
        this.props.getStatus(userId)
    }

    render() {

        if (!this.props.profile) {
            return <Prealoder/>
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


