import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostDataPropsType} from "../../redux/state";



type ProfilePropsType = {
    postData: Array<PostDataPropsType>
    dispatch:(action:any)=>void
}

const Profile: React.FC<ProfilePropsType> = ({postData,dispatch}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={postData} dispatch={dispatch} />
        </div>
    );
};

export default Profile;