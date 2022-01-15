import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes } from 'react-router-dom';

const alex = {
    name:"Alex"
}

let copyAlex = {...alex}

copyAlex.name="John"

console.log(alex)
console.log(copyAlex)

function App() {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content" >
                <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/dialogs"  element={<Dialogs/>}/>
            </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
