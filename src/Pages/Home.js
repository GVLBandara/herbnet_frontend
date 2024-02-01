import React, {useState} from 'react'
import IdentifyImage from '../Components/IdentifyImage'
import ViewResult from "../Components/ViewResult";

const Home = () => {
	const [identifierVisible, setIdentifierVisible] = useState(false)
	const [resultVisible, setResultVisible] = useState(false)
	const [plantData, setPlantData] = useState("")
	const openIdentify = () => {
		identifierVisible ? setIdentifierVisible(false) : setIdentifierVisible(true);
	}

	const openResult = () => {
		resultVisible ? setResultVisible(false) : setResultVisible(true);
	}
	console.log('Home', plantData)

	return (
		<div className="w-[100vw] h-[100vh] bg-cover bg-[url('/src/Pages/Images/Herbnet_home_page.jpg')]">
			<button className={`w-[136px] h-[32px] bg-[#fff] mt-[31px] rounded-[5px] ml-[849px] text-[14px] font-semibold hover:bg-[#17c270] text-[#000]
        hover:text-[#fff]`} onClick={openIdentify}>Identify Your Plant
			</button>
			{identifierVisible ?
				<div><IdentifyImage close={openIdentify} openResult={openResult} setPlantData={setPlantData}/></div> : <></>}
			{resultVisible ?
				<div><ViewResult close={openResult} plantData={plantData}/>
				</div> : <></>}
		</div>
	)
}

export default Home
