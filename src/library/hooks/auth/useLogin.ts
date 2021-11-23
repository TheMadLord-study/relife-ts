import { useState } from 'react';
import xhr from 'core/axios/config';
import { useAppDispatch } from '../common/reduxTypedHooks';

import { AxiosError } from 'axios';
import { Login } from 'library/models/Auth';

import { authService } from 'library/services/authService';

import { getIAm, logout } from 'library/reducers/usersReducer';
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
				xhr.interceptors.request.use((config: any) => {
					config.headers.Authorization = `Token ${response.data.key}`;
					return config;
				});
				dispatch(getIAm());
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
