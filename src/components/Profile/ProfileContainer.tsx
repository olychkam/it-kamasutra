import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import Prealoder from "../common/prealoder/Prealoder";
import {RouteComponentProps, withRouter } from 'react-router-dom';


/*type ProfileType = {
    //posts: Array<PostsType>
    //message: string
    //store:StoreType
    //dispatch: (action: ActionsTypes) => void
}*/
type mapStateToPropsType = {
    profile:ProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PatchParamsType={
    userId:string
}
type onProfileContainerType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerType=RouteComponentProps<PatchParamsType>&onProfileContainerType
class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount(){
        let userId=this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            debugger
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        if(!this.props.profile){
           return  <Prealoder/>
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
let withUrlDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);