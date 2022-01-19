import React from 'react';
import s from './MyPosts.module.css'
import Post from "./posts/Post";
import {PostDataPropsType} from "../../../App";

type MyPostsPropsType ={
    postData:Array<PostDataPropsType>
}

const MyPosts:React.FC<MyPostsPropsType> = ({postData}) => {




    const renderPostData =  postData.map(p=><Post message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {renderPostData}
            </div>
        </div>
    );
};

export default MyPosts;