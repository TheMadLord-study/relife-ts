import React from 'react';
import logo from 'resources/icons/App/logo.svg';
import st from './index.module.scss';

function App() {
	return (
		<div className={st.App}>
			<header className={st.AppHeader}>
				<img src={logo} className={st.AppLogo} alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
