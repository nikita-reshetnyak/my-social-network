import { combineReducers, createStore, applyMiddleware } from 'redux'
import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';
import usersPageReducer from './usersPage-reducer';
import authReducer from './auth-Reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersPageReducer,
   auth: authReducer,
   form:formReducer,
   app:appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;