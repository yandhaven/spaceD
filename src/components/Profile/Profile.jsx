import React from 'react';
import modules from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return <div className={modules.content}>
        <ProfileInfo />
        < MyPostsContainer />
    </div>
}
export default Profile;