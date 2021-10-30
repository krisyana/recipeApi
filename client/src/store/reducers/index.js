import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import favoriteReducer from './favoriteReducer';

const reducer = combineReducers({
    usersState: userReducer,
    favoriteState: favoriteReducer,
});

export default reducer;