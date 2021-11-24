import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import xhr from 'core/axios/config';

import { getIAm, clearUserData } from 'library/reducers/usersReducer';
import { getSettings, getModules } from 'library/reducers/commonReducer';
import { useAppDispatch, useAppSelector } from '../common/reduxTypedHooks';

const useLoginStatus = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const users = useAppSelector((store) => store.users);
	const common = useAppSelector((store) => store.common);

	const checkToken = useCallback(() => {
		const token = localStorage.getItem('token');
		if (token) {
			xhr.defaults.headers.common['Authorization'] = `Token ${token}`;
			dispatch(getIAm());
		} else if (!token) {
			delete xhr.defaults.headers.common.Authorization;
			dispatch(clearUserData());
			navigate('/');
		}
		dispatch(getSettings());
		dispatch(getModules());
	}, [dispatch, navigate]);

	const loadUserData = useCallback(() => {
		const token = localStorage.getItem('token');
		if (token && !users.user.id && !users.isLoading) {
			dispatch(getIAm());
		}

		if (common.settings.upper_menu.length === 0 && !common.settingsLoading) {
			dispatch(getSettings());
		}

		if (common.modules.length === 0 && !common.modulesLoading) {
			dispatch(getModules());
		}
	}, [dispatch, users, common]);

	useEffect(() => {
		loadUserData();
		window.addEventListener('storage', checkToken);
		return () => {
			window.removeEventListener('storage', checkToken);
		};
	}, [checkToken, loadUserData]);
	return {};
};

export default useLoginStatus;
