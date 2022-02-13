import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store, { RootStateType} from "./redux/state";
import reportWebVitals from "./reportWebVitals";


 let reRenderTree = (state:RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} changeText={store.changeText.bind(store)} addNewMessageText={store.addNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderTree(store.getState())
store.subscribe(reRenderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
