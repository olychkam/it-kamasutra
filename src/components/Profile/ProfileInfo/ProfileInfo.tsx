import React from 'react';
import s from './ProfileInfo.module.css';



export function ProfileInfo() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://3.bp.blogspot.com/-j5oVTE2TNq8/XGRY4ZDjmyI/AAAAAAAABPU/LC7t1LjCaRMnIo442dZIcX-6s9cYuqNgwCLcBGAs/w1200-h630-p-k-no-nu/Desktop-Wallpaper-4.jpg"/>
            </div>
            <div className={s.description}>ava+description</div>
        </div>

    )
}