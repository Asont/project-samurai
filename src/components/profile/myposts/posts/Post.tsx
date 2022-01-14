import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message:string
    likeCount:number
}

const Post: React.FC<PostPropsType> = ({message, likeCount}) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwietvC7gF18DquCIrD23sXOhbL_so1G7pEQ&usqp=CAU"
                alt="avatar"/>
            {message}
            <div>
                <span>like</span>
                <span>{likeCount}</span>
            </div>
        </div>
    );
};

export default Post;