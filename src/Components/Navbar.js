import React, {useState} from 'react'
import {useAuth} from "./AuthContext";
import IdentifyImage from "./IdentifyImage";
import ViewResult from "./ViewResult";
import Login from "./Login";
import {SignUp} from "./SignUp";

function Navbar() {
	const {getUser, userIsAuthenticated, userLogout} = useAuth()
	const [identifierVisible, setIdentifierVisible] = useState(false)
	const [resultVisible, setResultVisible] = useState(false)
	const [loginVisible, setLoginVisible] = useState(false)
	const [singupVisible, setSingupVisible] = useState(false)
	const [plantData, setPlantData] = useState("")
	const openIdentify = () => {
		setIdentifierVisible(!identifierVisible);
	}

	const openResult = () => {
		setResultVisible(!resultVisible);
	}

	const openLogin = () => {
		setSingupVisible(false)
		setLoginVisible(!loginVisible)
	}

	const openSignup = () => {
		setLoginVisible(false)
		setSingupVisible(!singupVisible);
	}

	const logout = () => {
		userLogout()
	}

	const enterMenuStyle = () => {
		return userIsAuthenticated() ? {"display": "none"} : {"display": "block"}
	}

	const logoutMenuStyle = () => {
		return userIsAuthenticated() ? {"display": "block"} : {"display": "none"}
	}

	const adminPageStyle = () => {
		const user = getUser()
		return user && user.role === 'ADMIN' ? {"display": "block"} : {"display": "none"}
	}

	const userPageStyle = () => {
		const user = getUser()
		return user && user.role === 'USER' ? {"display": "block"} : {"display": "none"}
	}

	const getUserName = () => {
		const user = getUser()
		return user ? user.name : ''
	}

	return (
		<div>
			<div className={`h-10 bg-green-500 flex justify-around items-center`}>
				<div>
					<button
						className={`w-[136px] h-[32px] bg-[#fff] rounded-[5px] text-[14px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
						onClick={openIdentify}>Identify Your Plant
					</button>
				</div>
				<div>
					<div className={`flex`} style={enterMenuStyle()}>
						<button
							className={`w-[136px] h-[32px] bg-[#fff] rounded-[5px] text-[14px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
							onClick={openLogin}>LogIn
						</button>
						<button
							className={`w-[136px] h-[32px] bg-[#fff] rounded-[5px] text-[14px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
							onClick={openSignup}>SignUp
						</button>
					</div>
					<div style={logoutMenuStyle()}>
						<button
							className={`w-[136px] h-[32px] bg-[#fff] rounded-[5px] text-[14px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
						>Chat
						</button>
						<button
							className={`w-[136px] h-[32px] bg-[#fff] rounded-[5px] text-[14px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
							onClick={logout}>LogOut
						</button>
					</div>
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
			{loginVisible ?
				<div><Login close={openLogin} signup={openSignup}/>
				</div> : <></>
			}
			{singupVisible ?
				<div><SignUp close={openSignup} login={openLogin}/>
				</div> : <></>
			}
		</div>
	)
}

export default Navbar
