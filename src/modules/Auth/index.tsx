import { FC, useState } from 'react';
import Modal from 'react-modal';
import { Button, Row, Col } from 'react-bootstrap';

import { useAppSelector } from 'library/hooks/common/reduxTypedHooks';

import Login from './frames/LoginForm';
import Register from './frames/RegisterForm';
import ChangePass from './frames/ChangePassForm';

import st from './index.module.scss';

const Auth: FC = () => {
	const [tab, setTab] = useState<string>('register');
	const isOpen = useAppSelector((store) => store.modals.authModalIsOpen);

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
				<Col>
					<Button variant="primary" onClick={() => setTab('changePass')}>
						changePass
					</Button>
				</Col>
			</Row>
			<Row>
				{tab === 'register' && <Register />}
				{tab === 'login' && <Login />}
				{tab === 'changePass' && <ChangePass setTab={setTab} />}
			</Row>
		</Modal>
	);
};

export default Auth;
