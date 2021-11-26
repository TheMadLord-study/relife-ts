import xhr from 'core/axios/config';
import { AxiosResponse } from 'axios';
import { Order } from 'library/models/Store';

const getBasket = async (): Promise<AxiosResponse<Order>> => {
	return xhr.post('/store/product/get_basket/');
};

export const storeService = {
	getBasket,
};
