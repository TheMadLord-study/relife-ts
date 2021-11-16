import axios from 'axios';
// import { getCookie } from 'library/helpers/common/cookies';

const xhr = axios.create();

// const token = getCookie('token');

// if (token) {
// 	xhr.defaults.headers.common['Authorization'] = `Token ${token}`;
// }

// xhr.defaults.headers.common['Content-Type'] = 'application/json';

xhr.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return error;
	}
);

export default xhr;
