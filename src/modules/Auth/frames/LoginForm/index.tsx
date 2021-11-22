import React from 'react';
import { useForm } from 'react-hook-form';

import { Login } from 'library/models/Auth';

import useLogin from 'library/hooks/useLogin';

interface FormValues {
	phonenumber: string;
	password: string;
}

const LoginForm = () => {
	const { register, handleSubmit } = useForm<FormValues>();
	const login = useLogin();

	const handleLogin = (data: Login) => {
		login.login(data);
	};

	return (
		<form
			onSubmit={handleSubmit((data) => {
				handleLogin(data);
			})}
		>
			<input {...register('phonenumber')} id="phonenumber" />
			<input {...register('password')} id="password" />
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
