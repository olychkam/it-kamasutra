import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/redux-store";

export function renderTree() {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}

/*renderTree(store.getState());
store.subscribe(()=>{
    let state=store.getState();
    renderTree(state);
});*/
renderTree()


