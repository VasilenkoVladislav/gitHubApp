import { combineReducers } from 'redux';
import modalsReducer from './modalsReducer';
import searchScreenReducer from './searchScreenReducer';

export default combineReducers({
    modals: modalsReducer,
    searchScreen: searchScreenReducer
});
