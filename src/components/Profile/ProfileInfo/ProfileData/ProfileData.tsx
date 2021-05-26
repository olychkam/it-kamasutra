import React from 'react';
import {ProfileType} from "../../../../redux/profile-reducer";
import {Contact} from "../ProfileInfo";


type PropsType = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: () => void
}
export const ProfileData: React.FC<PropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>:{profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>:{profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About Me</b>:{profile.aboutMe}
        </div>
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>

    </div>
}