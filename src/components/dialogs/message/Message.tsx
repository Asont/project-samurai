import React from "react";
import s from "../Dialogs.module.css";

type MessagePropsType = {
    text: string
}

const Message: React.FC<MessagePropsType> = ({text}) => {
    return (
        <div className={s.message}>
            {text}

        </div>
    )
}

export default Message;