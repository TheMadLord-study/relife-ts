import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'core/redux/store';

interface ModalState {
	authModalIsOpen: boolean;
}

const initialState = {
	authModalIsOpen: false,
} as ModalState;

export const modals = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		openAuthModal: (state: ModalState) => {
			state.authModalIsOpen = true;
		},
	},
});

export const { openAuthModal } = modals.actions;

export const selectAuthOpen = (state: RootState) => state.modals.authModalIsOpen;

export default modals.reducer;
