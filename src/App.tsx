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
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {setUserProfile} from "./redux/profile-reducer";

type AppPropsType = {
   // store: StoreType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={() =>
                    <DialogsContainer/>
                    }/>
                    <Route exact path={'/profile'} render={() =>
                        <ProfileContainer /*store={props.store}*/ /*message={state.profilePage.messageForNewPost}*/
                            /*dispatch={props.store.dispatch.bind(props.store)}*/
                        />}/>

                    <Route exact path="/music" render={() => <Music title={'Music'}/>}/>
                    <Route exact path="/news" render={() => <News title={'News'}/>}/>
                    <Route exact path="/settings" render={() => <Settings title={'Settings'}/>}/>
                    <Route exact path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
