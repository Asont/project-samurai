import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://igate.com.ua/upload/photo/0001/0001/1717/8266/89.jpg" alt="image" height="300px"/>
            </div>
            <div>ava + discription</div>
            <div>My posts</div>
            <div>New posts</div>
            <div className={s.posts}>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
    );
};

export default Profile;