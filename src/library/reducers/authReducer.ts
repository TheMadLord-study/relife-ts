import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'library/services/authService';
import xhr from 'core/axios/config';

import { getIAm } from 'library/reducers/usersReducer';

interface AuthState {
	isUpdating: boolean;
	isAuth: boolean;
}

const initialState = {
	isUpdating: false,
	isAuth: false,
} as AuthState;

export const login = createAsyncThunk(
	'auth/login',
	async ({ username, password }: { username: string; password: string }, { dispatch }) => {
		const response = await authService.login(username, password);
		if (response.status === 200) {
			localStorage.setItem('token', response.data.key);
			xhr.interceptors.request.use((config: any) => {
				config.headers.Authorization = `Token ${response.data.key}`;
				return config;
			});
			dispatch(getIAm());
		}
		return response.data;
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout();
});

export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		makeAuth: (state: AuthState) => {
			state.isAuth = true;
		},
		makeUnauth: (state: AuthState) => {
			state.isAuth = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state, action) => {
			console.log(action.payload);
			state.isUpdating = true;
		});

		builder.addCase(login.fulfilled, (state, action) => {
			state.isUpdating = false;
			state.isAuth = true;
		});

		builder.addCase(login.rejected, (state, action) => {
			console.log(action.payload);
			localStorage.removeItem('token');
			state.isUpdating = false;
			state.isAuth = false;
		});

		builder.addCase(logout.fulfilled, (state, action) => {
			console.log(action.payload);
			localStorage.removeItem('token');
			state.isAuth = false;
		});
	},
});

export const { makeAuth, makeUnauth } = auth.actions;

export default auth.reducer;
