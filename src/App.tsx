import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, RouteComponentProps, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import Prealoder from "./components/common/prealoder/Prealoder";

type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapDispatchToPropsType = {
    getUserData: () => void
}
type mapStateToPropsType = {
    initialized: boolean
}

//type PropsType = RouteComponentProps<any> & StateType


class App extends React.Component<AppPropsType, any> {

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        if (!this.props.initialized) {
            return <Prealoder/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route exact path="/dialogs" render={() =>
                            <DialogsContainer/>
                        }/>
                        <Route exact path={'/profile:userId?'} render={() =>
                            <ProfileContainer /*store={props.store}*/ /*message={state.profilePage.messageForNewPost}*/
                                /*dispatch={props.store.dispatch.bind(props.store)}*/
                            />}/>

                        <Route exact path="/music" render={() => <Music title={'Music'}/>}/>
                        <Route exact path="/news" render={() => <News title={'News'}/>}/>
                        <Route exact path="/settings" render={() => <Settings title={'Settings'}/>}/>
                        <Route exact path="/users" render={() => <UsersContainer/>}/>
                        <Route exact path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialize}))(App) as React.ComponentClass;
