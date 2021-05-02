import React from 'react';
import profileReducer, {addPostAC, deletePostAC, ProfileType} from "./profile-reducer";

export let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'Hi, how are you??', likesCount: 48},
    ],
    profile: null as ProfileType | null,
    status: ''
}
test('message of new post should be correct', () => {

    let action = addPostAC('It-inkubator - cool')
    let newState = profileReducer(initialState, action)

    expect(newState.posts[2].message).toBe('It-inkubator - cool');
});

test('length of posts should be incremented', () => {

    let action = addPostAC('It-inkubator - cool')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3);
});
test('after deleting length shouldn"t be decrement', () => {

    let action = deletePostAC(3)
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2);
});