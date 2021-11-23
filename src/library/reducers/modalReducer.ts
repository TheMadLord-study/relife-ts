import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'core/redux/rootReducer';

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
		closeAuthModal: (state: ModalState) => {
			state.authModalIsOpen = false;
		},
	},
});

export const { openAuthModal, closeAuthModal } = modals.actions;

export const selectAuthOpen = (state: RootState) => state.modals.authModalIsOpen;

export default modals.reducer;
