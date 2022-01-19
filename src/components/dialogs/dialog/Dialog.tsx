import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    name: string
    id: string
}


const Dialog: React.FC<DialogPropsType> = ({name, id}) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialog/" + id}>{name}</NavLink>
        </div>
    )
}




export default Dialog