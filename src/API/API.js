import axios from 'axios';

export const API = {
	authenticate,
	signup,
	search,
	addProduct,
	getProduct,
};

function authenticate(username, password) {
	return instance.post(
		'/auth/authenticate',
		{ username, password },
		{
			headers: { 'Content-type': 'application/json' },
		}
	);
}

function signup(user) {
	return instance.post('/auth/signup', user, {
		headers: { 'Content-type': 'application/json' },
	});
}

function search(key) {
	const url = `/product/search`;
	return instance.get(url, {
		headers: { 'Content-type': 'application/json' },
	});
}

function addProduct(user, product) {
	return instance.post('/product', product, {
		headers: {
			'Content-type': 'application/json',
			Authorization: basicAuth(user),
		},
	});
}

function getProduct(user, productId) {
	return instance.get(`/product/${productId}`, {
		headers: {
			'Content-type': 'application/json',
			Authorization: basicAuth(user),
		},
	});
}

// -- Axios

const instance = axios.create({
	baseURL: 'http://localhost:8080',
});

// -- Helper functions

function basicAuth(user) {
	return `Basic ${user.authData}`;
}
