import axios from 'axios';

export const API = {
	authenticate,
	signup,
	getProfile,
	search,
	addProduct,
	updateProduct,
	getProduct,
	getMyProducts,
	deleteProduct,
	getChatList,
	getMessageList,
	sendMessage,
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

function getProfile(user) {
	const url = `/userprofile`;
	return instance.get(url, {
		headers: { Authorization: basicAuth(user) },
	});
}

function search(key) {
	const url = `/product/search`;
	return instance.get(url, {
		headers: { 'Content-type': 'application/json' },
	});
}

function addProduct(user, product) {
	return instance.post('/product/new', product, {
		headers: {
			'Content-type': 'application/json',
			Authorization: basicAuth(user),
		},
	});
}

function updateProduct(user, product) {
	return instance.put('/product/update', product, {
		headers: {
			'Content-type': 'application/json',
			Authorization: basicAuth(user),
		},
	});
}

function deleteProduct(user, productId) {
	return instance.delete(`/product/delete/${productId}`, {
		headers: { Authorization: basicAuth(user) },
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

function getMyProducts(user) {
	return instance.get(`/product`, {
		headers: { Authorization: basicAuth(user) },
	});
}

function getChatList(user) {
	return instance.get(`/message`, {
		headers: { Authorization: basicAuth(user) },
	});
}

function getMessageList(user, withUserId) {
	return instance.get(`/message/${withUserId}`, {
		headers: { Authorization: basicAuth(user) },
	});
}

function sendMessage(user, message) {
	return instance.post('/message', message, {
		headers: {
			'Content-type': 'application/json',
			Authorization: basicAuth(user),
		},
	});
}

const instance = axios.create({
	baseURL: 'http://localhost:8080',
});

function basicAuth(user) {
	return `Basic ${user.authData}`;
}
