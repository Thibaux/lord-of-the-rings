import axios from 'axios';

let key = process.env.API_KEY;

export const HTTP = axios.create({
	baseURL: `https://the-one-api.dev/v2/`,
	headers: {
		Authorization: `Bearer ${key}`
	}
})