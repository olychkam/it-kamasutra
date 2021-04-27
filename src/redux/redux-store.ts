import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ActionProfileTypes} from "./profile-reducer";
import dialogsReducer, {ActionsDialogsTypes} from "./dialogs-reducer";
import usersReducer, {ActionsUsersTypes} from "./users-reducer";
import authReducer, {ActionsAuthTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer, {ActionsAppTypes} from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
type AppActionType = ActionProfileTypes | ActionsDialogsTypes | ActionsUsersTypes | ActionsAuthTypes | ActionsAppTypes
export type StateType = ReturnType<typeof reducers>
export type StoreType = typeof store
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, AppActionType>
export default store;