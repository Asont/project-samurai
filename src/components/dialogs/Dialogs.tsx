import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import { DialogsDataPropsType, MessageDataPropsType} from "../../redux/state";
import {actionMessageCreater} from "../../redux/dilalogs-reducer";



type DialogsPropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messageData: Array<MessageDataPropsType>
    dispatch:(action:any)=>void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messageData,dispatch}) => {

    const [message, setMessage] = useState<string>("")


    const renderMessage = messageData.map(m => <Message text={m.text}/>)
    const renderDialogs = dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)

    const onChangeTextarea =(e:ChangeEvent<HTMLTextAreaElement>) =>{
        setMessage(e.currentTarget.value)
    }
    const onClickAddMessage =() =>{
        let action = actionMessageCreater(message)
        dispatch(action)
        setMessage("")
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {renderDialogs}
            </div>
            <div className={s.messages}>
                {renderMessage}
                <div>
                    <div><textarea value={message} onChange={onChangeTextarea}/></div>
                    <div><button onClick={onClickAddMessage}>add</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;