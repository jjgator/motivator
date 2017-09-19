import axios from 'axios';
import API_KEY from '../../../config.js';

export const getQuote = function(url, category) {
	return axios({
		method:'get',
			url: url,
			params: {
				api_key: API_KEY,
				category: category
			}
	});
};

