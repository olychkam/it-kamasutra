import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";
import Prealoder from "../components/common/prealoder/Prealoder";
import {AppPropsType} from "../App";


export function withSuspense<T>(Component: ComponentType<T>) {

    return (props: any) => {
        return <React.Suspense fallback={<Prealoder/>}><Component {...props}/></React.Suspense>
    }


}