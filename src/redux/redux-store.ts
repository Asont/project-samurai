import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dilalogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let reducers = combineReducers({
  profileReducer,
    dialogsReducer,
    sidebarReducer
})

let store = createStore(reducers)

export default store