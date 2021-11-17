import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'core/services/authService';

interface AuthState {
	isAuth: boolean;
}

const initialState = {
	isAuth: false,
} as AuthState;

export const login = createAsyncThunk(
	'auth/login',
	async ({ username, password }: { username: string; password: string }) => {
		const response = await authService.login(username, password);
		return response;
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
		builder.addCase(login.fulfilled, (state, action) => {
			console.log(action.payload);
			localStorage.setItem('token', action.payload.data.key);
		});

		builder.addCase(logout.fulfilled, (state, action) => {
			console.log(action.payload);
			localStorage.removeItem('token');
		});
	},
});

export const { makeAuth, makeUnauth } = auth.actions;

export default auth.reducer;
