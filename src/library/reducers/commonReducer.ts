import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'core/redux/rootReducer';
import { ModuleRead } from 'library/models/Common';
import { commonService } from 'library/services/commonService';

interface CommonState {
	modules: ModuleRead[] | undefined;
	modulesLoading: boolean;
}

const initialState: CommonState = {
	modules: [],
	modulesLoading: false,
};

export const getModules = createAsyncThunk('common/modules', async (_, { rejectWithValue }) => {
	try {
		const response = await commonService.getModules();
		let modules = [...response.data];
		modules = [...modules.filter((module) => module.permissions.indexOf('view_module') !== -1)];
		return modules;
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

export const selectModules = (state: RootState) => state.common.modules;
export const selectModulesLoading = (state: RootState) => state.common.modulesLoading;

export default common.reducer;
