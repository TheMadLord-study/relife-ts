import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'library/services/usersService';

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

export const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getIAm.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export default users.reducer;
