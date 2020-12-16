import {combineReducers, createStore} from "redux"
import peoplesReducer from "./peoples-reducer"
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    peoplesPage: peoplesReducer,
    messagesPage: messagesReducer,
})

let store = createStore(reducers)

export default store
