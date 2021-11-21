import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import useToken from 'library/hooks/useToken';

import Header from 'modules/Header';
import Home from 'modules/Home';
import Auth from 'modules/Auth';
import Test from 'modules/Test';

const App: FC = () => {
	useToken();
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Auth />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</>
	);
};

export default App;
