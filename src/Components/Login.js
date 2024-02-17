import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { IoClose } from 'react-icons/io5';
import { API } from '../API/API';
import { inputFieldDivStyle, inputFieldSytle } from './SignUp';

function Login({ close, signup }) {
	const Auth = useAuth();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleInputChange = (e) => {
		if (e.target.name === 'username') {
			setUsername(e.target.value);
		} else if (e.target.name === 'password') {
			setPassword(e.target.value);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (username && password) {
			try {
				const response = await API.authenticate(username, password);
				const { name, role } = response.data;
				const authData = window.btoa(username + ':' + password);
				const authenticatedUser = { name, role, authData: authData };

				Auth.userLogin(authenticatedUser);
				close();
			} catch (error) {
				console.error('Error :', error);
			}
		} else {
			alert('Insert Username and Password');
		}
	};

	return (
		<div
			className={`w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 bg-[#00000080]`}
		>
			<div className={`w-[800px] h-[600px] bg-[#fff] rounded-[10px]`}>
				<div className="w-full h-[50px] bg-[#0f824b] rounded-t-[10px] flex items-center">
					<h1 className="w-[calc(100%-50px)] text-[25px] text-[#fff] flex items-center justify-center font-bold h-[50px]">
						LogIn
					</h1>
					<IoClose className={`text-white text-5xl`} onClick={close} />
				</div>

				<form
					className={`w-full h-[540px] flex justify-center items-center`}
					onSubmit={handleSubmit}
				>
					<div
						className={`h-full w-full flex gap-4 flex-col items-center justify-center`}
					>
						<div className={inputFieldDivStyle}>
							{/* <label htmlFor="username">Username:</label> */}
							<input
								className={inputFieldSytle}
								placeholder="Username"
								type="text"
								id="username"
								name="username"
								value={username}
								onChange={handleInputChange}
							/>
						</div>

						<div className={inputFieldDivStyle}>
							{/* <label htmlFor="password">Password:</label> */}
							<input
								className={inputFieldSytle}
								placeholder="Password"
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={handleInputChange}
							/>
						</div>
						<div className="flex flex-col w-full items-center gap-4 mt-8">
							<button
								className={`hover:bg-[#232323] transition-all duration-200 w-1/2 rounded-lg text-white bg-[#0f824b] py-2`}
								type="submit"
							>
								LogIn
							</button>
							<p>
								New member?{' '}
								<span
									className={`hover:underline underline-offset-[5px] transition-all duration-150 text-blue-600 cursor-pointer`}
									onClick={signup}
								>
									Register
								</span>{' '}
								here!
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
