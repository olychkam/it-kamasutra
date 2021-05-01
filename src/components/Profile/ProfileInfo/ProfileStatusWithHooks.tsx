import React, {useState} from 'react';
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    return (
        <div>
            {!editMode &&

            <div>

                <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}
