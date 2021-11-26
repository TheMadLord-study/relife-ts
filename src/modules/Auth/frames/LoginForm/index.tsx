import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { Login } from 'library/models/Auth';

import useLogin from 'library/hooks/auth/useLogin';

interface FormValues {
	phonenumberLogin: string;
	password: string;
}

const LoginForm = () => {
	const { register, handleSubmit } = useForm<FormValues>();
	const login = useLogin();

	const handleLogin = (data: Login) => {
		login.login({ phonenumber: data.phonenumberLogin, password: data.password });
	};

	return (
		<Form
			onSubmit={handleSubmit((data) => {
				handleLogin(data);
			})}
		>
			<Form.Group className="mb-3">
				<Form.Label>Phone number</Form.Label>
				<Form.Control
					{...register('phonenumberLogin', { required: true })}
					id="phonenumberLogin"
					disabled={login.isLoading}
					type="text"
				/>
				<Form.Text className="text-muted">We'll never share your phone with anyone else.</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control
					{...register('password', { required: true, minLength: 6 })}
					id="password"
					disabled={login.isLoading}
					type="password"
				/>
				<Form.Text className="text-muted">Please enter your password</Form.Text>
			</Form.Group>
			<Button variant="primary" type="submit" disabled={login.isLoading}>
				Login
			</Button>
		</Form>
	);
};

export default LoginForm;
