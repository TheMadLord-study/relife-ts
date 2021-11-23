import { useState } from 'react';
import xhr from 'core/axios/config';
import { useAppDispatch } from '../common/reduxTypedHooks';

import { AxiosError } from 'axios';
import { Login } from 'library/models/Auth';

import { authService } from 'library/services/authService';

import { getIAm, logout } from 'library/reducers/usersReducer';
import { getSettings } from 'library/reducers/commonReduser';
import { closeAuthModal } from 'library/reducers/modalReducer';

const useLogin = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<AxiosError>({} as AxiosError);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const dispatch = useAppDispatch();

	const login = async (data: Login) => {
		setError({} as AxiosError);
		setIsLoading(true);
		await authService
			.login(data)
			.then((response) => {
				localStorage.setItem('token', response.data.key);
				xhr.defaults.headers.common['Authorization'] = `Token ${response.data.key}`;
				dispatch(getIAm());
				dispatch(getSettings());
				dispatch(closeAuthModal());
			})
			.catch((error: AxiosError) => {
				setError(error);
			});
		setIsLoading(false);
	};

	const logoutUser = async () => {
		setError({} as AxiosError);
		setIsLoading(true);
		await dispatch(logout());
		dispatch(getSettings());
		setIsLoading(false);
	};

	return {
		isLoading,
		error,
		email,
		setEmail,
		password,
		setPassword,
		login,
		logoutUser,
	};
};

export default useLogin;
