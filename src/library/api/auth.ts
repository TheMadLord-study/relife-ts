import xhr from 'core/axios/config';

export const registerPhone = (data: { phonenumber: string }) => xhr.post('/api/v1/auth/patient/register_phone', data);

export const loginEmail = (data: { username: string; password: string }) =>
	xhr.post('/api/v1/auth/rest-auth/login/', data);
