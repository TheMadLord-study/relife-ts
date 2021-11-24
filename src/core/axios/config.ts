import axios from 'axios';

const token = localStorage.getItem('token');

const xhr = axios.create({
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

if (token) {
	xhr.defaults.headers.common['Authorization'] = `Token ${token}`;
}

xhr.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			console.log('ошибка авторизации');
			localStorage.removeItem('token');
			delete xhr.defaults.headers.common.Authorization;
			return (window.location.href = '/');
		}
		return error;
	}
);

export default xhr;
