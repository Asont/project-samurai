import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {addNewMessageText, RootStateType} from './redux/state';

type AppStyle ={
    state:RootStateType
    changeText : (text:string)=>void
}

const App:React.FC<AppStyle> = ({state,changeText}) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile postData={state.profilePage.postData}
                                                                 addNewMessageText={addNewMessageText} changeText = {changeText}/>}/>
                        <Route path="/dialogs"
                               element={<Dialogs dialogsData={state.dialogPage.dialogsData}
                                                 messageData={state.dialogPage.messageData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
