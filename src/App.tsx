import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



export type DialogsDataPropsType = {
    id:string
    name:string
}

const dialogsData: Array<DialogsDataPropsType> = [
    {id: "1", name: "John"},
    {id: "2", name: "Ann"},
    {id: "3", name: "Kate"},
    {id: "4", name: "John"},
    {id: "5", name: "Travis"},
]


export type MessageDataPropsType = {
    text:string
    id:number
}

const messageData: Array<MessageDataPropsType> = [
    {id:1, text:"Hello, how are you?"},
    {id:2, text:"Are you happy?"},
    {id:3,text:"Yes, I will go to London next month"},
]

export type PostDataPropsType = {
    message:string
    likeCount:number
}

const postData:Array<PostDataPropsType> = [
    {message:"Hi, how are you?", likeCount:12},
    {message:"It's my first post.", likeCount:24},
]

function  App () {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile postData={postData}/>}/>
                        <Route path="/dialogs" element={<Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
