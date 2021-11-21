import { useEffect } from 'react';

const useToken = () => {
	useEffect(() => {
		const checkToken = () => {
			const key = localStorage.getItem('key');

			if (key) {
				console.log(key);
			}
		};

		window.addEventListener('storage', checkToken);
		return () => {
			window.removeEventListener('storage', checkToken);
		};
	}, []);
	return {};
};

export default useToken;
