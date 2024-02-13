import React, { useState } from "react";
import closeImg from "../Pages/Images/closebtn.png";
import { API } from "../API/API";
import { useAuth } from "./AuthContext";

export function SignUp({ close, login }) {
	const { userIsAuthenticated } = useAuth();
	console.log(userIsAuthenticated);
	const [signUpData, setSignUpData] = useState({
		username: '',
		email: '',
		password: ''
	});
	const [profileData, setProfileData] = useState({
		firstName: '',
		lastName: '',
		phone: ''
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (Object.keys(signUpData).includes(name)) {
			setSignUpData({ ...signUpData, [name]: value });
		} else {
			setProfileData({ ...profileData, [name]: value });
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		let filled = true;
		Object.values({ ...signUpData, ...profileData }).forEach(value => {
			if (!(value)) filled = false;
		})

		if (!filled) {
			alert("Fill all the fields!");
		} else {
			try {
				const response = await API.signup(signUpData);
				console.log(response.status)
				login();
			} catch (error) {
				console.error('Error :', error);
			}
		}
	}

	return (
		<div className={`w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 bg-[#00000080]`}>
			<div className={`w-[800px] h-[600px] bg-[#fff] rounded-[10px]`}>
				<div className='w-full h-[50px] bg-[#0f824b] rounded-t-[10px] flex items-center'>
					<h1 className='w-[calc(100%-50px)] text-[25px] text-[#fff] flex items-center justify-center font-bold h-[50px]'>SignUp</h1>
					<button onClick={close}>
						<img className='w-[50px] h-[40px]' src={closeImg} alt="close_btn" />
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
								value={signUpData.username}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<label htmlFor="email">Email:</label>
							<input
								type="text"
								id="email"
								name="email"
								value={signUpData.email}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<label htmlFor="firstName">First Name:</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={profileData.firstName}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<label htmlFor="lastName">Last Name:</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={profileData.lastName}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<label htmlFor="phone">Phone:</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={profileData.phone}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								id="password"
								name="password"
								value={signUpData.password}
								onChange={handleInputChange}
							/>
						</div>
						{userIsAuthenticated() ?
							<div>
								<button className={`bg-blue-400`} type="submit">Update</button>
							</div> :
							<div>
								<button className={`bg-blue-400`} type="submit">SignUp</button>
								<p>Already member?
									<span className={`hover: text-blue-600 cursor-pointer`}
										onClick={login}>LogIn</span>
									here!
								</p>
							</div>
						}
					</div>
				</form>
			</div>
		</div>
	)
}