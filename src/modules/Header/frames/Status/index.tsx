import { useSelector } from 'react-redux';

import { RootState } from 'core/redux/store';

const Status = (): JSX.Element => {
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuth);
	return (
		<div style={{ color: 'white' }}>{isAuthenticated ? <span>Авторизован</span> : <span>Не авторизован</span>}</div>
	);
};

export default Status;
