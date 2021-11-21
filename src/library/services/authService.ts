import xhr from 'core/axios/config';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Login } from 'library/models/Auth';

const login = async (username: string, password: string): Promise<AxiosResponse<Login>> => {
	return axios.post('/auth/rest-auth/login/', { username, password });
};

const logout = async () => {
	return xhr.post('/auth/rest-auth/logout/');
};

export const authService = {
	login,
	logout,
};
