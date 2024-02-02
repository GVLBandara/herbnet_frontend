import React, {useState} from 'react'
import {useAuth} from "./AuthContext";

function Login() {
	const Auth = useAuth()
	console.log(Auth)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleInputChange = (e) => {
		if (e.target.name === 'username') {
			setUsername(e.target.value)
		} else if (e.target.name === 'password') {
			setPassword(e.target.value)
		}
	}

	const login = data => {
		const {name, role} = data
		const authdata = window.btoa(username + ':' + password)
		const authenticatedUser = {name, role, authdata}
		Auth.userLogin(authenticatedUser)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (username && password) {

			fetch('http://localhost:8080/auth/authenticate', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({username, password}),
			})
				.then(response => response.json())
				.then(data => {
					login(data)
				})
				.catch(error => {
					console.error('Error :', error);
				});
		} else {
			alert("Insert Username and Password");
		}
	}

	return (
		<form className={`w-full h-screen flex justify-center items-center`} onSubmit={handleSubmit}>
			<div className={`h-[50vh] w-[30vw] bg-amber-300`}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleInputChange}
					/>
				</div>
				<button className={`bg-blue-400`} type="submit">Submit</button>
			</div>
		</form>
	)
}

export default Login