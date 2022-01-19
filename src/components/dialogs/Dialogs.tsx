import React from 'react';
import s from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import {DialogsDataPropsType, MessageDataPropsType} from "../../redux/state";



type DialogsPropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messageData: Array<MessageDataPropsType>
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messageData}) => {


    const renderMessage = messageData.map(m => <Message text={m.text}/>)
    const renderDialogs = dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {renderDialogs}
            </div>
            <div className={s.messages}>
                {renderMessage}
            </div>
        </div>
    );
};

export default Dialogs;