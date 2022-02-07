import React, {ChangeEvent, LegacyRef, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./posts/Post";
import {changeText, PostDataPropsType, state} from "../../../redux/state";



type MyPostsPropsType = {
    postData: Array<PostDataPropsType>
    addNewMessageText : (postMassege:string) => void
    changeText : (text:string)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = ({postData, addNewMessageText,changeText }) => {

    const [title, setPosts] = useState<Array<PostDataPropsType>>(postData)

    let newPostElement= React.createRef<HTMLTextAreaElement>()

    const renderPostData = postData.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)



    const addPosts = () => {
        addNewMessageText(state.profilePage.messageForNewPost)
        changeText("")
    }


 const onClickTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        changeText(e.currentTarget.value)

 }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={state.profilePage.messageForNewPost} onChange={onClickTextAreaChange}/>
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