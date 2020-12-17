import {combineReducers, createStore} from "redux"
import peoplesReducer from "./peoples-reducer"
import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"

let reducers = combineReducers({
    peoplesPage: peoplesReducer,
    messagesPage: messagesReducer,
    profilePage: profileReducer,
})

let store = createStore(reducers)

export default store
