import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import xhr from 'core/axios/config';

import { getIAm, clearUserData } from 'library/reducers/usersReducer';
import { getSettings } from 'library/reducers/commonReducer';
import { useAppDispatch } from '../common/reduxTypedHooks';

const useLoginStatus = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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
	}, [dispatch, navigate]);

	const loadUserData = useCallback(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(getIAm());
		}
		dispatch(getSettings());
	}, [dispatch]);

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
