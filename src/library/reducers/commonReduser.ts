import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'core/redux/rootReducer';
import { PlatformSettings } from 'library/models/Common';
import { commonService } from 'library/services/commonService';

const initialState = {
	settings: {} as PlatformSettings,
};

export const getSettings = createAsyncThunk('users/settings', async () => {
	const response = await commonService.getSettings();
	return response.data;
});

export const common = createSlice({
	name: 'common',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getSettings.fulfilled, (state, action) => {
			state.settings = action.payload;
		});
	},
});

export const selectSettings = (state: RootState) => state.common.settings;

export default common.reducer;
