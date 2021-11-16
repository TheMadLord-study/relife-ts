import xhr from 'core/axios/config';

export const registerPhone = (data: { phonenumber: string }) => xhr.post('/auth/patient/register_phone/', data);

export const loginEmail = (data: { username: string; password: string }) => xhr.post('/auth/rest-auth/login/', data);
