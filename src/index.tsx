import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
export function renderTree() {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
            </BrowserRouter>,
        document.getElementById('root')

    );
}

/*renderTree(store.getState());
store.subscribe(()=>{
    let state=store.getState();
    renderTree(state);
});*/
renderTree()


