import React, {useState} from "react";
import {useAuth} from "./AuthContext";
import closeImg from "../Pages/Images/closebtn.png";

export function SignUp({close, login}) {
	const Auth = useAuth()

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState('')

	const handleInputChange = (e) => {
		if (e.target.name === 'username') {
			setUsername(e.target.value)
		} else if (e.target.name === 'password') {
			setPassword(e.target.value)
		} else if (e.target.name === 'email') {
			setEmail(e.target.value)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (username && email && password) {

			fetch('http://localhost:8080/auth/signup', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({username, password, email}),
			})
				.then(response => response.json())
				.then(data => {
					console.log(data)
					login();
				})
				.catch(error => {
					console.error('Error :', error);
				});
		} else {
			alert("Insert Username and Password");
		}
	}

	return (
		<div className={`w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 bg-[#00000080]`}>
			<div className={`w-[800px] h-[600px] bg-[#fff] rounded-[10px]`}>
				<div className='w-full h-[50px] bg-[#0f824b] rounded-t-[10px] flex items-center'>
					<h1 className='w-[calc(100%-50px)] text-[25px] text-[#fff] flex items-center justify-center font-bold h-[50px]'>SignUp</h1>
					<button onClick={close}>
						<img className='w-[50px] h-[40px]' src={closeImg} alt="close_btn"/>
					</button>
				</div>

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
							<label htmlFor="email">Email:</label>
							<input
								type="text"
								id="email"
								name="email"
								value={email}
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
						<button className={`bg-blue-400`} type="submit">SignUp</button>
						<p>Already member? <span className={`hover: text-blue-600 cursor-pointer`} onClick={login}>LogIn</span> here!</p>
					</div>
				</form>
			</div>
		</div>
	)
}