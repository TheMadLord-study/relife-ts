import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'modules/Loader';
import Header from 'modules/Header';
import Home from 'modules/Home';
import Auth from 'modules/Auth';
import Test from 'modules/Test';

const App: FC = () => {
	return (
		<>
			<Loader />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<Test />} />
			</Routes>
			<Auth />
		</>
	);
};

export default App;
