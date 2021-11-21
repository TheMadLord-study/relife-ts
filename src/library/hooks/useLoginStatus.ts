import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getIAm } from 'library/reducers/usersReducer';
import { reset } from 'library/reducers/authReducer';

const useLoginStatus = () => {
	const dispatch = useDispatch();

	const checkToken = useCallback(() => {
		const key = localStorage.getItem('token');
		if (key) {
			dispatch(getIAm());
		} else {
			dispatch(reset());
		}
	}, [dispatch]);

	useEffect(() => {
		checkToken();
		window.addEventListener('storage', checkToken);
		return () => {
			window.removeEventListener('storage', checkToken);
		};
	}, [checkToken]);
	return {};
};

export default useLoginStatus;
