import { combineReducers } from '@reduxjs/toolkit';
import auth from 'library/reducers/authReducer';
import users from 'library/reducers/usersReducer';

const rootReducer = combineReducers({
	auth,
	users,
});

export default rootReducer;
