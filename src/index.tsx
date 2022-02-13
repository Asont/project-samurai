import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store, { RootStateType} from "./redux/state";
import reportWebVitals from "./reportWebVitals";


 let rereRenderTree = (state:RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rereRenderTree(store.getState())
store.subscribe(rereRenderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
