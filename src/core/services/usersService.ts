import xhr from 'core/axios/config';
import { AxiosResponse } from 'axios';

import { I_amResponse } from 'models/response/UsersResponse';

const i_am = (): Promise<AxiosResponse<I_amResponse>> => {
	return xhr.get('/users/i_am/');
};

export const userService = {
	i_am,
};
