import { useState } from 'react';

import { Login } from 'library/models/Auth';

import { authService } from 'library/services/authService';

const useLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const login = (data: Login) => {
		authService.login(data);
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		login,
	};
};

export default useLogin;
