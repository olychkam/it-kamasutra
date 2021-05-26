import React from 'react';
import {ProfileType} from "../../../../redux/profile-reducer";
import {Contact} from "../ProfileInfo";


type PropsType = {
    profile: ProfileType,
    isOwner: boolean,
}
export const ProfileDataForm: React.FC<PropsType> = ({profile, isOwner}) => {
    return <div>
        FORM
    </div>
}