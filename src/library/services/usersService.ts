import xhr from 'core/axios/config';
import { AxiosResponse } from 'axios';

import { IAm } from 'library/models/Users';

const getIAm = async (): Promise<AxiosResponse<IAm>> => {
	return xhr.get('/users/i_am/');
};

export const userService = {
	getIAm,
};
