import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    getStatus,
    getUserProfile,
    ProfileType,
    savePhoto,
    setUserProfile,
    updateStatus
} from "../../redux/profile-reducer";
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
    status: string,
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto:(file:string)=>void

}

type PatchParamsType = {
    userId: string
}
type onProfileContainerType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerType = RouteComponentProps<PatchParamsType> & onProfileContainerType

class ProfileContainer extends React.Component<ProfileContainerType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '11025'
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId!=prevProps.match.params.userId){
            this.refreshProfile()
        }
}

    render() {
        debugger
        if (!this.props.profile) {
            return <Prealoder/>
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         isOwner={!this.props.match.params.userId}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


