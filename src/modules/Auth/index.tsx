import { FC, useState } from 'react';
import Modal from 'react-modal';
import { Tabs, Tab } from 'react-bootstrap';

import { useAppSelector } from 'library/hooks/common/reduxTypedHooks';

import Login from './frames/LoginForm';
import Register from './frames/RegisterForm';
import ChangePass from './frames/ChangePassForm';

import st from './index.module.scss';

const Auth: FC = () => {
	const [tab, setTab] = useState<any>('login');
	const isOpen = useAppSelector((store) => store.modals.authModalIsOpen);

	return (
		<Modal
			isOpen={isOpen}
			className={st.modal}
			overlayClassName={st.overlay}
			appElement={document.getElementById('root') as HTMLElement}
		>
			<Tabs activeKey={tab} onSelect={(tab) => setTab(tab)} className="mb-3">
				<Tab eventKey="register" title="Register">
					<Register />
				</Tab>
				<Tab eventKey="login" title="Login">
					<Login />
				</Tab>
				<Tab eventKey="change password" title="Change password">
					<ChangePass setTab={setTab} />
				</Tab>
			</Tabs>
		</Modal>
	);
};

export default Auth;
