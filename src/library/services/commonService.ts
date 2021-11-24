import xhr from 'core/axios/config';
import { AxiosResponse } from 'axios';

import { PlatformSettings, ModuleRead } from 'library/models/Common';

const getSettings = async (): Promise<AxiosResponse<PlatformSettings>> => {
	return xhr.get('/common/settings/');
};

const getModules = async (): Promise<AxiosResponse<ModuleRead[]>> => {
	return xhr.get('/common/module/');
};

export const commonService = {
	getSettings,
	getModules,
};
