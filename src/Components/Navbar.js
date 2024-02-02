import React, {useState} from 'react'
import {useAuth} from "./AuthContext";
import IdentifyImage from "./IdentifyImage";
import ViewResult from "./ViewResult";

function Navbar() {
	const {getUser, userIsAuthenticated, userLogout} = useAuth()
	const [identifierVisible, setIdentifierVisible] = useState(false)
	const [resultVisible, setResultVisible] = useState(false)
	const [plantData, setPlantData] = useState("")
	const openIdentify = () => {
		identifierVisible ? setIdentifierVisible(false) : setIdentifierVisible(true);
	}

	const openResult = () => {
		resultVisible ? setResultVisible(false) : setResultVisible(true);
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
					<button className={`w-[136px] h-[32px] bg-[#fff] rounded-[5px] text-[14px] font-semibold hover:bg-[#17c270] text-[#000]
        hover:text-[#fff]`} onClick={openIdentify}>Identify Your Plant
					</button>
				</div>
			</div>
			{identifierVisible ?
				<div><IdentifyImage close={openIdentify} openResult={openResult} setPlantData={setPlantData}/>
				</div> : <></>}
			{resultVisible ?
				<div><ViewResult close={openResult} plantData={plantData}/>
				</div> : <></>}
		</div>
	)
}

export default Navbar
