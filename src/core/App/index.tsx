import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import useLoginStatus from 'library/hooks/useLoginStatus';

import Header from 'modules/Header';
import Home from 'modules/Home';
import Auth from 'modules/Auth';
import Test from 'modules/Test';

const App: FC = () => {
	useLoginStatus();
	return (
		<>
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
