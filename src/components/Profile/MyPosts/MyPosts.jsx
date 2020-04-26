import React from 'react';
import modules from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {



    let onChangeText = (text) => {
        let newText = text.target.value

        props.addText(newText)


        // props.areaValueChange(text.target.value)

    }

    let addPost = () => {
        props.addPost();

        // props.addPosts();

    }

    let Posts = (props) => {

        return (

            <Post message={props.message} like_count={props.like_count} />

        )

    }


    let postArray = props.posts.map((el) => {
        return (
            <Posts message={el.message} like_count={el.like_count} />
        )
    })




    return (
        <div className={modules.content}>
            <div>
                my posts
            </div>
            <div>
                <div><textarea onChange={onChangeText} value={props.tempValue}></textarea>
                </div>
                <div><button onClick={addPost}>Add</button></div>

            </div>
            <div>
                <h4>new posts</h4>
            </div>
            <div className={modules.post}>
                {postArray}
            </div>
        </div>
    )

}
export default MyPosts;