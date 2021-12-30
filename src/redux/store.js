import { createStore } from "redux";
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";
import appReducer from "./appReducer";
const store=createStore(
    combineReducers({
        tasks: taskReducer,
        theme:appReducer
    })
   )

export default store