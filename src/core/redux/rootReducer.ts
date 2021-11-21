import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import auth from 'library/reducers/authReducer';
import users from 'library/reducers/usersReducer';

import { RootState } from 'core/redux/store';

const combinedReducer = combineReducers({
	auth,
	users,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
	if (action.type === 'auth/reset') {
		state = {} as RootState;
	}
	return combinedReducer(state, action);
};

export default rootReducer;
