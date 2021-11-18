import xhr from 'core/axios/config';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { LoginResponse } from 'models/response/AuthResponse';

const login = async (username: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
	return axios.post('/auth/rest-auth/login/', { username, password });
};

const logout = async () => {
	return xhr.post('/auth/rest-auth/logout/');
};

export const authService = {
	login,
	logout,
};
