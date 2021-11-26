import { FC } from 'react';

import Loader from 'modules/Loader';
import Header from 'modules/Header';
import AppRoutes from 'core/App/Routes';
import Auth from 'modules/Auth';

const App: FC = () => {
	return (
		<>
			<Loader />
			<Header />
			<AppRoutes />
			<Auth />
		</>
	);
};

export default App;
