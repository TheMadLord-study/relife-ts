import xhr from 'core/axios/config';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Login, LoginResponse, PasscodeCreate, VerifyOnRegister, VerifyResponse } from 'library/models/Auth';

const login = async (data: Login): Promise<AxiosResponse<LoginResponse>> => {
	return axios.post('/auth/rest-auth/login/', data);
};

const logout = async () => {
	return xhr.post('/auth/rest-auth/logout/');
};

const registerPhone = async (data: PasscodeCreate): Promise<AxiosResponse<PasscodeCreate>> => {
	return axios.post('/auth/patient/register_phone/', data);
};

const verifyOnRegister = async (data: VerifyOnRegister): Promise<AxiosResponse<VerifyResponse>> => {
	return axios.post('/auth/patient/verify_on_register/', data);
};

export const authService = {
	login,
	logout,
	registerPhone,
	verifyOnRegister,
};
