import { combineReducers } from '@reduxjs/toolkit';
import auth from 'library/reducers/auth';

const rootReducer = combineReducers({
	auth,
});

export default rootReducer;
