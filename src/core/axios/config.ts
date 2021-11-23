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

export default xhr;
