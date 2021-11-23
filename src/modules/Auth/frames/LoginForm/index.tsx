import { useForm } from 'react-hook-form';

import { Login } from 'library/models/Auth';

import useLogin from 'library/hooks/auth/useLogin';

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
			<input {...register('phonenumber')} id="phonenumber" disabled={login.isLoading} />
			<input {...register('password', { required: true, minLength: 6 })} id="password" disabled={login.isLoading} />
			<button type="submit" disabled={login.isLoading}>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
