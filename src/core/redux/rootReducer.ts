import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import users from 'library/reducers/usersReducer';
import modals from 'library/reducers/modalReducer';

const rootReducer = combineReducers({
	users,
	modals,
});

// const rootReducer: Reducer = (state, action) => {
// 	// if (action.type === 'auth/reset') {
// 	// 	state = {} as RootState;
// 	// }
// 	return combinedReducer(state, action);
// };

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
