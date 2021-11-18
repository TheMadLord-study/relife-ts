import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { I_amResponse } from 'models/response/UsersResponse';

const initialState = {} as I_amResponse;

export const auth = createSlice({
	name: 'i_am',
	initialState,
	reducers: {
		getIam,
	},
});
