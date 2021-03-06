import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import xhr from 'core/axios/config';

import { userService } from 'library/services/usersService';
import { authService } from 'library/services/authService';

import { IAm } from 'library/models/Users';

interface UserState {
	user: IAm | undefined;
	isLoading: boolean;
}

const initialState = {
	user: {},
	isLoading: false,
} as UserState;

export const getIAm = createAsyncThunk('users/i_am', async (_, { rejectWithValue }) => {
	try {
		const response = await userService.getIAm();
		return response.data;
	} catch (error) {
		rejectWithValue(error);
	}
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
		builder.addCase(getIAm.pending, (state: UserState) => {
			state.isLoading = true;
		});

		builder.addCase(getIAm.fulfilled, (state: UserState, action) => {
			state.user = action.payload;
			state.isLoading = false;
		});

		builder.addCase(logout.fulfilled, (state) => {
			state.user = {} as IAm;
		});
	},
});

export const { clearUserData } = users.actions;

export default users.reducer;
