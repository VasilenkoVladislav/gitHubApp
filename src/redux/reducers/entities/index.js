import { combineReducers } from 'redux';
import headersReducer from './headersReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    headers: headersReducer,
    user: userReducer,
    search: searchReducer
});
