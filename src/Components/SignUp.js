import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { API } from '../API/API';
import { useAuth } from './AuthContext';

export function SignUp({ close, login }) {
	const { userIsAuthenticated } = useAuth();
	console.log(userIsAuthenticated);
	const [signUpData, setSignUpData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [profileData, setProfileData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (Object.keys(signUpData).includes(name)) {
			setSignUpData({ ...signUpData, [name]: value });
		} else {
			setProfileData({ ...profileData, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let filled = true;
		Object.values({ ...signUpData, ...profileData }).forEach((value) => {
			if (!value) filled = false;
		});

		if (!filled) {
			alert('Fill all the fields!');
		} else {
			try {
				const response = await API.signup(signUpData);
				console.log(response.status);
				login();
			} catch (error) {
				console.error('Error :', error);
			}
		}
	};

	return (
		<div
			className={`w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 bg-[#00000080]`}
		>
			<div className={`w-[800px] h-[600px] bg-[#fff] rounded-[10px]`}>
				<div className="w-full h-[50px] bg-[#0f824b] rounded-t-[10px] flex items-center">
					<h1 className="w-[calc(100%-50px)] text-[25px] text-[#fff] flex items-center justify-center font-bold h-[50px]">
						SignUp
					</h1>
					<IoClose className={`text-white text-5xl`} onClick={close} />
				</div>

				<form
					className={`w-full h-[540px] flex justify-center items-center`}
					onSubmit={handleSubmit}
				>
					<div
						className={`h-full w-full flex flex-col items-center justify-around py-12`}
					>
						<div className={inputFieldDivStyle}>
							{/* <label htmlFor="username">Username:</label> */}
							<input
								className={inputFieldSytle}
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={signUpData.username}
								onChange={handleInputChange}
							/>
						</div>

						<div className={inputFieldDivStyle}>
							{/* <label htmlFor="email">Email:</label> */}
							<input
								className={inputFieldSytle}
								placeholder="Email"
								type="text"
								id="email"
								name="email"
								value={signUpData.email}
								onChange={handleInputChange}
							/>
						</div>

						<div className={inputFieldDivStyle}>
							{/* <label htmlFor="firstName">First Name:</label> */}
							<input
								className={inputFieldSytle}
								placeholder="First Name"
								type="text"
								id="firstName"
								name="firstName"
								value={profileData.firstName}
								onChange={handleInputChange}
							/>
						</div>

						<div className={inputFieldDivStyle}>
							{/* <label htmlFor="lastName">Last Name:</label> */}
							<input
								className={inputFieldSytle}
								placeholder="Last Name"
								type="text"
								id="lastName"
								name="lastName"
								value={profileData.lastName}
								onChange={handleInputChange}
							/>
						</div>

						<div className={inputFieldDivStyle}>
							{/* <label htmlFor="phone">Phone:</label> */}
							<input
								className={inputFieldSytle}
								placeholder="Telephone"
								type="tel"
								id="phone"
								name="phone"
								value={profileData.phone}
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
								value={signUpData.password}
								onChange={handleInputChange}
							/>
						</div>
						{userIsAuthenticated() ? (
							<div className=" w-full flex flex-col gap-3 items-center mt-10">
								<button
									className={`hover:bg-[#232323] transition-all duration-200 w-1/2 rounded-lg text-white bg-[#0f824b] py-2`}
									type="submit"
								>
									Update
								</button>
							</div>
						) : (
							<div className=" w-full flex flex-col gap-3 items-center mt-10">
								<button
									className={`hover:bg-[#232323] transition-all duration-200 w-1/2 rounded-lg text-white bg-[#0f824b] py-2`}
									type="submit"
								>
									SignUp
								</button>
								<p>
									Already member?
									<span
										className={`hover:underline underline-offset-[5px] transition-all duration-150 text-blue-600 cursor-pointer`}
										onClick={login}
									>
										Log In
									</span>
									here!
								</p>
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}

export const inputFieldDivStyle = 'w-1/2 h-12';
export const inputFieldSytle =
	' w-full h-3/4  border-[#999999] transition-all duration-200 outline-none focus:border-b-[#0f824b] border-b-2 px-2 ';
