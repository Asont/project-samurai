import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostDataPropsType} from "../../redux/state";



type ProfilePropsType = {
    postData: Array<PostDataPropsType>
    addNewMessageText : (postMassege:string) => void
    changeText : (text:string)=>void
}

const Profile: React.FC<ProfilePropsType> = ({postData, addNewMessageText, changeText}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={postData} addNewMessageText={addNewMessageText} changeText={changeText} />
        </div>
    );
};

export default Profile;