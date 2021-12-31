import { createStore,applyMiddleware } from "redux";
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";
import appReducer from "./appReducer";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    blacklist:['navigation']
  }
const rootReducer=combineReducers({
    tasks: taskReducer,
    state:appReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
  }

