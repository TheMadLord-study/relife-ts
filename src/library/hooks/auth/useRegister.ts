import { useState } from 'react';
import xhr from 'core/axios/config';
import { useAppDispatch } from '../common/reduxTypedHooks';

import { authService } from 'library/services/authService';

import { getIAm } from 'library/reducers/usersReducer';
import { closeAuthModal } from 'library/reducers/modalReducer';

const useRegister = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [step, setStep] = useState<string>('1-phone');
	const [phonenumber, setPhonenumber] = useState<string>('');

	const dispatch = useAppDispatch();

	const registerPhone = async (phone: string) => {
		setIsLoading(true);
		await authService
			.registerPhone({ phonenumber: phone })
			.then((response) => {
				setStep('2-code');
				setPhonenumber(phone);
				console.log(response);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const verifyOnRegister = async (code: string, password: string) => {
		setIsLoading(true);
		await authService
			.verifyOnRegister({ phonenumber: phonenumber, passcode: code, password: password })
			.then((response) => {
				console.log(response);
				localStorage.setItem('token', response.data.token);
				xhr.interceptors.request.use((config: any) => {
					config.headers.Authorization = `Token ${response.data.token}`;
					return config;
				});
				dispatch(getIAm());
				dispatch(closeAuthModal());
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return {
		isLoading,
		registerPhone,
		verifyOnRegister,
		step,
		setStep,
	};
};

export default useRegister;
