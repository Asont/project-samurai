import React from 'react';
import s from './MyPosts.module.css'
import Post from "./posts/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likeCount={12}/>
                <Post message="It's my first post." likeCount={24}/>
            </div>
        </div>
    );
};

export default MyPosts;