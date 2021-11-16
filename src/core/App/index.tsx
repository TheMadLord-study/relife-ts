import { Routes, Route } from 'react-router-dom';

import Header from 'modules/Header';
import Home from 'modules/Home';
import Auth from 'modules/Auth';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Auth />} />
			</Routes>
		</>
	);
};

export default App;
