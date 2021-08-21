import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { combineReducers, createStore } from 'redux';
import { IAppState } from './models/IAppState';
import { playerReducer } from './reducers/playerReducer';

const config = {
    key: 'root',
    storage: storage,
    blacklist: ['extras']
};

const rootReducer = combineReducers<IAppState>({
    currentPlayer: playerReducer
});

const persisted = persistReducer(config, rootReducer);

export default createStore(persisted);