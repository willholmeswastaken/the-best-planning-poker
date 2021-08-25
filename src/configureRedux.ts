import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import { IAppState } from './models/IAppState';
import { playerReducer } from './reducers/playerReducer';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { roomReducer } from './reducers/roomReducer';

const config = {
    key: 'root',
    storage: storage,
    blacklist: ['extras']
};

const rootReducer = combineReducers<IAppState>({
    currentPlayer: playerReducer,
    currentRoom: roomReducer
});

const persisted = persistReducer(config, rootReducer);

const store = configureStore({
    reducer: persisted,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;