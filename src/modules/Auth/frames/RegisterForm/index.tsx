import { useForm } from 'react-hook-form';

import useRegister from 'library/hooks/useRegister';

interface PhoneValues {
	phonenumber: string;
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
		<form
			onSubmit={handleSubmit((data) => {
				submit(data.phonenumber);
			})}
		>
			<input {...register('phonenumber')} id="phonenumber" disabled={isLoading} />
			<button type="submit" disabled={isLoading}>
				Register
			</button>
		</form>
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
			<input {...register('code')} id="code" disabled={isLoading} placeholder="Код" />
			<input {...register('password')} id="password" disabled={isLoading} placeholder="Пароль" />
			<input {...register('repeat')} id="repeat" disabled={isLoading} placeholder="Повторить пароль..." />
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
