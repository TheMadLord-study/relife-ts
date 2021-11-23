import xhr from 'core/axios/config';
import { AxiosResponse } from 'axios';

import { PlatformSettings } from 'library/models/Common';

const getSettings = async (): Promise<AxiosResponse<PlatformSettings>> => {
	return xhr.get('/common/settings/');
};

export const commonService = {
	getSettings,
};
