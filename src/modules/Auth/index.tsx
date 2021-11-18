import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { Form, Button } from 'react-bootstrap';

import { login, logout } from 'library/reducers/auth';

import st from './index.module.scss';

const Auth: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(login({ username: 'terranovas121@gmail.com', password: '111222asD' }));
	};

	return (
		<Modal
			isOpen
			className={st.modal}
			overlayClassName={st.overlay}
			appElement={document.getElementById('root') as HTMLElement}
		>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" onClick={() => handleLogin()}>
					Login
				</Button>
				<Button variant="primary" onClick={() => dispatch(logout())}>
					Logout
				</Button>
			</Form>
		</Modal>
	);
};

export default Auth;
