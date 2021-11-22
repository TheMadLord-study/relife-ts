import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import users from 'library/reducers/usersReducer';
import modals from 'library/reducers/modalReducer';

import { RootState } from 'core/redux/store';

const combinedReducer = combineReducers({
	users,
	modals,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
	if (action.type === 'auth/reset') {
		state = {} as RootState;
	}
	return combinedReducer(state, action);
};

export default rootReducer;
