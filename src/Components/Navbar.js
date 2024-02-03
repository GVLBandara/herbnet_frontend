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

function Navbar() {
	const {userIsAuthenticated, userLogout} = useAuth()
	const [identifierVisible, setIdentifierVisible] = useState(false)
	const [resultVisible, setResultVisible] = useState(false)
	const [logInVisible, setLogInVisible] = useState(false)
	const [singUpVisible, setSingUpVisible] = useState(false)
	const [plantData, setPlantData] = useState("")
	const [drop, setDrop] = useState("")

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
			<div className={`h-[120px] bg-black bg-opacity-25 px-12 py-16 flex justify-between`}>
				<div className={`flex gap-3 items-center`}>
					<img className={`w-16 rounded-2xl`} src={logo} alt={"Logo"}/>
					<p className={`text-white text-[26px] font-bold`}>Herbnet</p>
				</div>
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
							<IoIosArrowDown className={`text-3xl text-white cursor-pointer transition-all duration-500 ${(drop)?"rotate-180":"rotate-0"}`} onClick={openDrop}/>
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
