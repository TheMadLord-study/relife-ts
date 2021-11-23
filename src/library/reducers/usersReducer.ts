import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import xhr from 'core/axios/config';

import { userService } from 'library/services/usersService';
import { authService } from 'library/services/authService';

import { IAm } from 'library/models/Users';

interface UserState {
	user: IAm;
}

const initialState = {
	user: {},
} as UserState;

export const getIAm = createAsyncThunk('users/i_am', async () => {
	const response = await userService.getIAm();
	return response.data;
});

export const logout = createAsyncThunk('users/logout', async () => {
	const response = await authService.logout();
	if (response.status === 200) {
		localStorage.removeItem('token');
		delete xhr.defaults.headers.common.Authorization;
	}
});

export const users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		clearUserData: (state: UserState) => {
			state.user = {} as IAm;
			localStorage.removeItem('token');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getIAm.fulfilled, (state, action) => {
			state.user = action.payload;
		});

		builder.addCase(logout.fulfilled, (state) => {
			state.user = {} as IAm;
		});
	},
});

export const { clearUserData } = users.actions;

export default users.reducer;
