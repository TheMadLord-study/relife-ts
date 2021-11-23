import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getIAm, clearUserData } from 'library/reducers/usersReducer';
import { useAppDispatch, useAppSelector } from '../common/reduxTypedHooks';

const useLoginStatus = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.users.user);
	const navigate = useNavigate();

	const checkToken = useCallback(() => {
		const key = localStorage.getItem('token');
		if (key && !user.id) {
			dispatch(getIAm());
		} else if (!key) {
			dispatch(clearUserData());
			navigate('/');
		}
	}, [dispatch, navigate, user.id]);

	const loadUserData = useCallback(() => {
		const key = localStorage.getItem('token');
		if (key && !user.id) {
			dispatch(getIAm());
		}
	}, [dispatch, user.id]);

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
