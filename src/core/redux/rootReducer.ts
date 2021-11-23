import { combineReducers } from '@reduxjs/toolkit';
import users from 'library/reducers/usersReducer';
import modals from 'library/reducers/modalReducer';
import common from 'library/reducers/commonReduser';

const rootReducer = combineReducers({
	common,
	users,
	modals,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
