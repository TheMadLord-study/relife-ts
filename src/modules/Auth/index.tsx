import { FC, useState } from 'react';
import Modal from 'react-modal';
import { Button, Row, Col } from 'react-bootstrap';

import { useAppSelector } from 'library/hooks/reduxTypedHooks';
import useRegister from 'library/hooks/useRegister';

import Login from './frames/LoginForm';
import Register from './frames/RegisterForm';

import st from './index.module.scss';

const Auth: FC = () => {
	const [tab, setTab] = useState<string>('register');
	const isOpen = useAppSelector((store) => store.modals.authModalIsOpen);

	const register = useRegister();

	return (
		<Modal
			isOpen={isOpen}
			className={st.modal}
			overlayClassName={st.overlay}
			appElement={document.getElementById('root') as HTMLElement}
		>
			<Row xs={2} md={4} lg={6}>
				<Col>
					<Button variant="primary" onClick={() => setTab('register')}>
						Register
					</Button>
				</Col>
				<Col>
					<Button variant="primary" onClick={() => setTab('login')}>
						Login
					</Button>
				</Col>
			</Row>
			<Row>
				{tab === 'register' && <Register />}
				{tab === 'login' && <Login />}
			</Row>
		</Modal>
	);
};

export default Auth;
