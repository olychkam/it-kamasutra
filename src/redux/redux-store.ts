import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})
let store=createStore(reducers);

export type StateType = ReturnType<typeof reducers>
export type StoreType = typeof store
export default store;