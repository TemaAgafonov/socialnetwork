import {combineReducers, createStore} from "redux"
import peoplesReducer from "./peoples-reducer"

let reducers = combineReducers({
    peoplesPage: peoplesReducer,
})

let store = createStore(reducers)

export default store
