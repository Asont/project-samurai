import React, {ChangeEvent, LegacyRef, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./posts/Post";
import store, { PostDataPropsType} from "../../../redux/state";
import {actionNewPostCreater} from "../../../redux/profile-reducer";



type MyPostsPropsType = {
    postData: Array<PostDataPropsType>
    dispatch:(action:any)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = ({postData,dispatch }) => {

    const [post, setPosts] = useState<string>("")

debugger
    const renderPostData = postData.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)



    const addPosts = () => {
        let action = actionNewPostCreater(post)
        debugger
        dispatch(action)
        setPosts("")


    }


 const onClickTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setPosts(e.currentTarget.value)

 }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={post} onChange={onClickTextAreaChange}/>
                </div>
                <div>
                    <button onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {renderPostData}
            </div>
        </div>
    );
};

export default MyPosts;