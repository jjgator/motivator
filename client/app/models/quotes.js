import axios from 'axios';
import API_KEY from '../../../config.js';

export const getQuote = function() {
	return axios({
		method:'get',
			url:'http://quotes.rest/quote/random.json',
			params: {
				api_key: API_KEY
			}
	})
};

