import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { authService } from 'library/services/authService';

interface Error {
	code: boolean;
}

interface FormValues {
	phone: string;
}

const useRegister = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [step, setStep] = useState<string>('1-phone');
	const [error, setError] = useState<Error>({ code: false });
	const [phone, setPhone] = useState<string>('');
	const [code, setCode] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const { register } = useForm<FormValues>();

	const registerPhone = async () => {
		setIsLoading(true);
		await authService
			.registerPhone({ phonenumber: phone })
			.then((res) => {
				setStep('code');
				console.log(res);
			})
			.catch(() => {
				setError({ code: true });
			});
		setIsLoading(false);
	};

	const verifyOnRegister = async () => {
		setIsLoading(true);
		await authService.verifyOnRegister({ phonenumber: phone, passcode: code, password: password }).then((res) => {
			console.log(res);
		});
		setIsLoading(false);
	};

	return {
		phone,
		setPhone,
		isLoading,
		registerPhone,
		code,
		setCode,
		error,
		password,
		setPassword,
		verifyOnRegister,
		register,
		step,
		setStep,
	};
};

export default useRegister;
