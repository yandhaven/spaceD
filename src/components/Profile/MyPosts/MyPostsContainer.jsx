import React from 'react';
import modules from './MyPosts.module.css'
import Post from './Post/Post';
import { newPostActionCreator, newPostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {

        posts: state.profilePage.posts,
        tempValue: state.profilePage.tempValue



    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        addPost: () => {
            dispatch(newPostActionCreator());
        },

        addText: (body) => {
            dispatch(newPostTextActionCreator(body))

        }

    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;