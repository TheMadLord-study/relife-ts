import axios from 'axios';

const xhr = axios.create({
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

xhr.interceptors.request.use((config: any) => {
	config.headers.Authorization = `Token ${localStorage.getItem('token')}`;
	return config;
});

export default xhr;
