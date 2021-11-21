import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'library/services/usersService';

interface UsersState {
	user: any;
}

const initialState = {
	user: {},
} as UsersState;

export const getIAm = createAsyncThunk('users/i_am', async () => {
	const response = await userService.getIAm();
	return response;
});

export const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getIAm.fulfilled, (state, action) => {
			state.user = action.payload.data;
		});
	},
});

export default users.reducer;
