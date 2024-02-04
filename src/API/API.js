import axios from 'axios'

export const API = {
	authenticate,
	signup,
	getUsers,
	addProduct
}

function authenticate(username, password) {
	return instance.post('/auth/authenticate', { username, password }, {
		headers: { 'Content-type': 'application/json' }
	})
}

function signup(user) {
	return instance.post('/auth/signup', user, {
		headers: { 'Content-type': 'application/json' }
	})
}

function getUsers(user, username) {
	const url = username ? `/api/users/${username}` : '/api/users'
	return instance.get(url, {
		headers: { 'Authorization': basicAuth(user) }
	})
}

function addProduct(user, book) {
	return instance.post('/product', book, {
		headers: {
			'Content-type': 'application/json',
			'Authorization': basicAuth(user)
		}
	})
}

// -- Axios

const instance = axios.create({
	baseURL: 'http://localhost:8080'
})

// -- Helper functions

function basicAuth(user) {
	return `Basic ${user.authdata}`
}