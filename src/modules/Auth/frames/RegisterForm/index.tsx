import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

import useRegister from 'library/hooks/auth/useRegister';

interface PhoneValues {
	phonenumberRegister: string;
}

interface CodeValues {
	code: string;
	password: string;
	repeat: string;
}

interface PhoneProps {
	submit: (phone: string) => Promise<void>;
	isLoading: boolean;
}

const PhoneForm = ({ submit, isLoading }: PhoneProps) => {
	const { register, handleSubmit } = useForm<PhoneValues>();

	return (
		<Form
			onSubmit={handleSubmit((data) => {
				submit(data.phonenumberRegister);
			})}
		>
			<Form.Group className="mb-3">
				<Form.Label>Phone number</Form.Label>
				<Form.Control
					{...register('phonenumberRegister', { required: true })}
					id="phonenumberRegister"
					disabled={isLoading}
					type="text"
				/>
				<Form.Text className="text-muted">We'll never share your phone with anyone else.</Form.Text>
			</Form.Group>
			<Button variant="primary" type="submit" disabled={isLoading}>
				Register
			</Button>
		</Form>
	);
};

interface CodeProps {
	submit: (code: string, password: string) => Promise<void>;
	isLoading: boolean;
}

const CodeForm = ({ submit, isLoading }: CodeProps) => {
	const { register, handleSubmit } = useForm<CodeValues>();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				submit(data.code, data.password);
			})}
		>
			<input {...register('code', { required: true })} id="code" disabled={isLoading} placeholder="Код" />
			<input {...register('password', { required: true })} id="password" disabled={isLoading} placeholder="Пароль" />
			<input
				{...register('repeat', { required: true })}
				id="repeat"
				disabled={isLoading}
				placeholder="Повторить пароль..."
			/>
			<button type="submit" disabled={isLoading}>
				Register
			</button>
		</form>
	);
};

const RegisterForm = () => {
	const registerUser = useRegister();

	return (
		<>
			{registerUser.step === '1-phone' && (
				<PhoneForm submit={registerUser.registerPhone} isLoading={registerUser.isLoading} />
			)}
			{registerUser.step === '2-code' && (
				<CodeForm submit={registerUser.verifyOnRegister} isLoading={registerUser.isLoading} />
			)}
		</>
	);
};

export default RegisterForm;
