import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState();
    let message = state.dialogsPage.messages
    let dialogs = state.dialogsPage.dialogs
    let posts = state.profilePage.posts
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={() =>
                        <Dialogs messages={message}
                                 dialogs={dialogs}
                                 dispatch={props.store.dispatch.bind(props.store)}
                                 newMessageBody={state.dialogsPage.newMessageBody}

                        />}/>
                    <Route exact path="/profile" render={() =>
                        <Profile posts={posts}
                                 message={state.profilePage.messageForNewPost}
                                 dispatch={props.store.dispatch.bind(props.store)}
                        />}/>

                    <Route exact path="/music" render={() => <Music title={'Music'}/>}/>
                    <Route exact path="/news" render={() => <News title={'News'}/>}/>
                    <Route exact path="/settings" render={() => <Settings title={'Settings'}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
