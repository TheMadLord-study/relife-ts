import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'core/redux/rootReducer';
import { PlatformSettings, ModuleRead } from 'library/models/Common';
import { commonService } from 'library/services/commonService';

interface CommonState {
	settings: PlatformSettings | undefined;
	modules: ModuleRead[] | undefined;
	settingsLoading: boolean;
	modulesLoading: boolean;
}

const initialState: CommonState = {
	settings: { exercices_library: false, upper_menu: [] },
	modules: [],
	settingsLoading: false,
	modulesLoading: false,
};

export const getSettings = createAsyncThunk('common/settings', async (_, { rejectWithValue }) => {
	try {
		const response = await commonService.getSettings();
		return response.data;
	} catch (error) {
		console.log(error);
		rejectWithValue(error);
	}
});

export const getModules = createAsyncThunk('common/modules', async (_, { rejectWithValue }) => {
	try {
		const response = await commonService.getModules();
		return response.data;
	} catch (error) {
		console.log(error);
		rejectWithValue(error);
	}
});

export const common = createSlice({
	name: 'common',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getSettings.pending, (state, action) => {
			state.settingsLoading = true;
		});

		builder.addCase(getSettings.fulfilled, (state, action) => {
			state.settings = action.payload;
			state.settingsLoading = false;
		});

		builder.addCase(getModules.pending, (state, action) => {
			state.modulesLoading = true;
		});

		builder.addCase(getModules.fulfilled, (state, action) => {
			state.modules = action.payload;
			state.modulesLoading = false;
		});

		builder.addCase(getModules.rejected, (state, action) => {
			state.modules = [];
			state.modulesLoading = false;
		});
	},
});

export const selectSettings = (state: RootState) => state.common.settings;
export const selectModules = (state: RootState) => state.common.modules;

export default common.reducer;
