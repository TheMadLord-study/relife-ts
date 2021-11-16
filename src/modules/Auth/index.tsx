import { useState } from 'react';
import Modal from 'react-modal';
import { Form, Button } from 'react-bootstrap';

import { registerPhone, loginEmail } from 'library/api/auth';

import st from './index.module.scss';

interface Props {}

const Auth = (props: Props) => {
	const [tab, setTab] = useState('phone');
	const [phonenumber, setPhonenumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlePhoneSubmit = () => {
		registerPhone({ phonenumber: phonenumber });
	};

	const handleEmailSubmit = () => {
		loginEmail({ username: email, password: password });
	};

	return (
		<Modal isOpen className={st.modal} overlayClassName={st.overlay}>
			<Button onClick={() => setTab('email')}>Email</Button>
			<Button onClick={() => setTab('phone')}>Phone</Button>

			{tab === 'phone' && (
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							type="tel"
							placeholder="Enter phone"
							value={phonenumber}
							onChange={(e) => setPhonenumber(e.target.value)}
						/>
						<Form.Text className="text-muted">We'll never share your phone number with anyone else.</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" onClick={() => handlePhoneSubmit()}>
						Submit
					</Button>
				</Form>
			)}
			{tab === 'email' && (
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
					<Button variant="primary" onClick={() => handleEmailSubmit()}>
						Submit
					</Button>
				</Form>
			)}
		</Modal>
	);
};

export default Auth;
