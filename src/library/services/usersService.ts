import xhr from 'core/axios/config';
import { AxiosResponse } from 'axios';

import { i_am } from 'library/models/Users';

const getIAm = (): Promise<AxiosResponse<i_am>> => {
	return xhr.get('/users/i_am/');
};

export const userService = {
	getIAm,
};
