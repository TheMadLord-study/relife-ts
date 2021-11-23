import { useState } from 'react';
import { AxiosError } from 'axios';

import { authService } from 'library/services/authService';

const useChangePassword = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState({} as AxiosError);
	const [step, setStep] = useState('1-phone');
	const [phonenumber, setPhonenumber] = useState<string>('');

	const resetPassword = async (phone: string) => {
		setIsLoading(true);
		authService.passwordReset({ phonenumber: phone }).then((response) => {
			console.log(response);
			setStep('2-code');
			setPhonenumber(phone);
		});
		setIsLoading(false);
	};

	const confirmReset = async (code: string, password: string) => {
		setIsLoading(true);
		setError({} as AxiosError);
		await authService
			.passwordConfirm({ phonenumber: phonenumber, passcode: code, password: password })
			.then((response) => {
				console.log(response);
				setStep('3-login');
			})
			.catch((error) => {
				setError(error);
			});
		setIsLoading(false);
	};

	return { isLoading, error, step, resetPassword, confirmReset };
};

export default useChangePassword;
