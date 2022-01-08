import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myposts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://igate.com.ua/upload/photo/0001/0001/1717/8266/89.jpg" alt="image" height="300px"/>
            </div>
            <div>ava + discription</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;