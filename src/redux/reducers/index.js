import { combineReducers } from 'redux';
import entitiesReducers from './entities';
import uiReducers from './ui';
import navReducer from './nav';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const entitiesConfig = {
    key: 'entities',
    storage: storage,
    whitelist: ['user', 'headers', 'search']
};

const uiConfig = {
    key: 'ui',
    storage: storage,
    whitelist: ['searchScreen']
};

export default combineReducers({
    entities: persistReducer(entitiesConfig, entitiesReducers),
    ui: persistReducer(uiConfig, uiReducers),
    nav: navReducer
});
