import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://igate.com.ua/upload/photo/0001/0001/1717/8266/89.jpg" alt="image" height="300px"/>
            </div>
            <div>ava + discription</div>
            <div>My posts</div>
            <div>New posts</div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
};

export default Profile;