import React, {useState} from 'react'
import {useAuth} from "./AuthContext";
import IdentifyImage from "./IdentifyImage";
import ViewResult from "./ViewResult";
import Login from "./Login";
import {SignUp} from "./SignUp";
import logo from "../Pages/Images/herbnet.png"
import {GoBell} from "react-icons/go";
import profilePic from "../Pages/Images/img.png"
import {IoIosArrowDown} from "react-icons/io";
import {IoSearchSharp} from "react-icons/io5";
import {useLocation, useNavigate} from "react-router-dom";

function Navbar({handleChange, handleSearch, searchKey}) {
	const {userIsAuthenticated, userLogout} = useAuth()
	const [identifierVisible, setIdentifierVisible] = useState(false)
	const [resultVisible, setResultVisible] = useState(false)
	const [logInVisible, setLogInVisible] = useState(false)
	const [singUpVisible, setSingUpVisible] = useState(false)
	const [plantData, setPlantData] = useState("")
	const [drop, setDrop] = useState(false)
	const navigate = useNavigate()
	const location = useLocation();

	const styleHome = `h-[120px] bg-black bg-opacity-25 px-12 py-16 flex justify-between items-center`;
	const styleNotHome = `bg-[#014621] px-12 py-[17px] flex justify-between items-center`

	const isHome = (location.pathname==='/');
	const openDrop = () => {
		setDrop(!drop);
	}
	const openIdentify = () => {
		setIdentifierVisible(!identifierVisible);
	}

	const openResult = () => {
		setResultVisible(!resultVisible);
	}

	const openLogin = () => {
		setSingUpVisible(false)
		setLogInVisible(!logInVisible)
	}

	const openSignup = () => {
		setLogInVisible(false)
		setSingUpVisible(!singUpVisible);
	}

	const logout = () => {
		userLogout()
	}

	return (
		<div className={`relative z-10`}>
			<div className={isHome ? styleHome : styleNotHome}>
				<div className={`flex gap-3 items-center mr-16 cursor-pointer`} onClick={()=>{navigate('/')}}>
					<img className={`w-16 rounded-2xl`} src={logo} alt={"Logo"}/>
					<p className={`text-white text-[26px] font-bold`}>Herbnet</p>
				</div>
				{!isHome? <div className={`bg-white h-11 w-full flex justify-between items-center mx-12 rounded-[10px]`}>
					<input
						className={`pl-4 h-full w-full rounded-[10px] font-medium text-[#7b7b7b] focus:outline-none placeholder:text-[#7b7b7b]`}
						type={"text"} placeholder={"Search for Products"}
						name="key"
						value={searchKey.key}
						onChange={handleChange}
						onKeyDown={event => {
							if (event.key === 'Enter') handleSearch()
						}}
					/>

					<div className={`flex gap-[2px] h-full`}>
						<div
							className={`h-full text-[#7b7b7b] font-medium bg-gray-200 rounded-[10px] flex justify-around items-center gap-1 px-1`}>
							<div className="relative">
								<select
									className={`bg-gray-200 appearance-none pl-1 pr-4 focus:outline-none`}
									name="part"
									value={searchKey.part}
									onChange={handleChange}>
									<option value="">All Parts</option>
									<option value="Roots">Roots</option>
									<option value="Leaves">Leaves</option>
									<option value="Fruits">Fruits</option>
									<option value="Flowers">Flowers</option>
								</select>
								<div className={`absolute inset-y-0 right-0 flex items-center pointer-events-none`}>
									<IoIosArrowDown className={`fill-current text-gray-500`}/>
								</div>
							</div>
						</div>

						<div
							className={`h-full text-[#7b7b7b] font-medium bg-gray-200 rounded-[10px] flex justify-around items-center gap-1 px-1`}>
							<div className="relative">
								<select
									className={`bg-gray-200 appearance-none pl-1 pr-4 focus:outline-none`}
									name="state"
									value={searchKey.state}
									onChange={handleChange}>
									<option value="">All States</option>
									<option value="Fresh">Fresh</option>
									<option value="Dried">Dried</option>
									<option value="Juiced">Juiced</option>
									<option value="Powdered">Powdered</option>
								</select>
								<div className={`absolute inset-y-0 right-0 flex items-center pointer-events-none`}>
									<IoIosArrowDown className={`fill-current text-gray-500`}/>
								</div>
							</div>
						</div>

						<div
							className={`h-full text-2xl text-[#7b7b7b] bg-gray-200 rounded-[10px] flex justify-around items-center px-2 cursor-pointer`}
							onClick={handleSearch}>
							<IoSearchSharp/>
						</div>

					</div>
				</div>:<></>}
				<div className={`flex gap-4 items-center`}>
					<div>
						<button
							className={`w-[180px] h-[45px] bg-[#fff] rounded-[10px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
							onClick={openIdentify}>Identify Your Plant
						</button>
					</div>
					{userIsAuthenticated() ?
						<div className={`flex gap-4 items-center`}>
							<button
								className={`w-[180px] h-[45px] bg-[#fff] rounded-[10px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}>
								Sell Your Product
							</button>
							<button
								className={`w-[70px] h-[45px] bg-[#fff] rounded-[10px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
							>Chat
							</button>
							<GoBell className={`text-3xl text-white mx-4`}/>
							<img className={`rounded-full w-14`} src={profilePic} alt={"Profile Pic"}/>
							<IoIosArrowDown
								className={`text-3xl text-white cursor-pointer transition-all duration-500 ${(drop) ? "rotate-180" : "rotate-0"}`}
								onClick={openDrop}/>
						</div> : <div className={`flex gap-4`}>
							<button
								className={`w-[70px] h-[45px] bg-[#fff] rounded-[10px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
								onClick={openLogin}>LogIn
							</button>
						</div>
					}
				</div>
			</div>
			{identifierVisible ?
				<div><IdentifyImage close={openIdentify} openResult={openResult} setPlantData={setPlantData}/>
				</div> : <></>
			}
			{resultVisible ?
				<div><ViewResult close={openResult} plantData={plantData}/>
				</div> : <></>
			}
			{logInVisible ?
				<div><Login close={openLogin} signup={openSignup}/>
				</div> : <></>
			}
			{singUpVisible ?
				<div><SignUp close={openSignup} login={openLogin}/>
				</div> : <></>
			}
			{drop ?
				<div className={`text-white fixed right-[45px] top-[75px] transition-all duration-500 cursor-pointer`}>
					<ul className="dropdown-menu flex flex-col gap-2">
						<li onClick={() => {
							logout();
							openDrop()
						}}>LogOut
						</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul>
				</div> : <></>
			}
		</div>
	)
}

export default Navbar
