import { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import useChangePassword from 'library/hooks/auth/useChangePassword';

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
			<input {...register('phonenumber', { required: true })} id="phonenumber" disabled={isLoading} />
			<button type="submit" disabled={isLoading}>
				Change password
			</button>
		</form>
	);
};

interface CodeProps {
	submit: (code: string, password: string) => Promise<void>;
	isLoading: boolean;
}

const CodeForm = ({ submit, isLoading }: CodeProps) => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<CodeValues>();

	console.log(errors);

	return (
		<form
			onSubmit={handleSubmit((data) => {
				submit(data.code, data.password);
			})}
		>
			<input {...register('code', { required: true })} id="code" disabled={isLoading} placeholder="Код" />
			<input {...register('password', { required: true })} id="password" disabled={isLoading} placeholder="Пароль" />
			<input
				{...register('repeat', {
					required: true,
					validate: (value) => value === getValues().password || 'Passwords not match',
				})}
				id="repeat"
				disabled={isLoading}
				placeholder="Повторить пароль..."
			/>
			<button type="submit" disabled={isLoading}>
				Change
			</button>
		</form>
	);
};

interface Props {
	setTab: (tab: string) => void;
}

const ChangePassForm = ({ setTab }: Props) => {
	const change = useChangePassword();

	const switchTab = useCallback(() => {
		setTab('login');
	}, [setTab]);

	useEffect(() => {
		if (change.step === '3-login') {
			switchTab();
		}
	}, [change.step, switchTab]);

	return (
		<>
			{change.step === '1-phone' && <PhoneForm submit={change.resetPassword} isLoading={change.isLoading} />}
			{change.step === '2-code' && <CodeForm submit={change.confirmReset} isLoading={change.isLoading} />}
		</>
	);
};

export default ChangePassForm;
