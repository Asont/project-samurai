import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {changeText, RootStateType, state, subscribe} from "./redux/state";
import reportWebVitals from "./reportWebVitals";


 let reRenderTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} changeText={changeText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderTree()
subscribe(reRenderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
