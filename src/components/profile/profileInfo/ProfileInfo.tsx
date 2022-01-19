import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://igate.com.ua/upload/photo/0001/0001/1717/8266/89.jpg" alt="image" height="300px"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    );
};

export default ProfileInfo;