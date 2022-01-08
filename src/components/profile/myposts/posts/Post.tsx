import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwietvC7gF18DquCIrD23sXOhbL_so1G7pEQ&usqp=CAU" alt="avatar"/>
            post 1
        </div>
    );
};

export default Post;