import React from 'react';
import s from './Post.module.css';
type PostsType={
    message:string
    likesCount:number
    id:number
}

export function Post(props: PostsType) {
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.1zoom.ru/prev2/330/329183.jpg'/>
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
            </div>
        </div>

    )
}