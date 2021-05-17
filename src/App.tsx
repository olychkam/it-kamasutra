import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, RouteComponentProps, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import Prealoder from "./components/common/prealoder/Prealoder";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

export type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapDispatchToPropsType = {
    initialize: () => void
}
type mapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<AppPropsType, any> {

    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <Prealoder/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route exact path={'/profile:userId?'} render={withSuspense(ProfileContainer)}/>
                    <Route exact path={"/users"} render={withSuspense(UsersContainer)}/>
                    <Route exact path="/music" render={() => <Music title={'Music'}/>}/>
                    <Route exact path="/news" render={() => <News title={'News'}/>}/>
                    <Route exact path="/settings" render={() => <Settings title={'Settings'}/>}/>
                    <Route exact path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialize}))(App);
