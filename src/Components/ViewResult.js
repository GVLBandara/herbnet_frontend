import React from 'react'
import closeImg from '../Pages/Images/closebtn.png'
import {useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext";

const ViewResult = ({close, plantData}) => {
	const {userIsAuthenticated} = useAuth();
	const navigate = useNavigate();

	console.log('viewResult', plantData)

	return (
		<div className='w-[100vw] h-[100vh]
        flex justify-center items-center absolute top-0 bg-[#00000080]'>
			<div className='w-[800px] h-[600px] bg-[#fff] rounded-[10px]'>
				<div className='w-full h-[50px] bg-[#0f824b] rounded-t-[10px] flex items-center'>
					<h1 className='w-[calc(100%-50px)] text-[25px] text-[#fff] flex items-center justify-center font-bold h-[50px]'>Plant
						Identifier</h1>
					<button onClick={close}><img className='w-[50px] h-[40px]' src={closeImg} alt="close_btn"/></button>
				</div>

				<div className='w-[100%] h-[550px] rounded-b-[10px] flex justify-center items-center flex-col'>{
					<div key={plantData.imagePath}
						 className='w-[700px] h-[350px] flex justify-center items-center bg-[#dadada]'>
						<img src={plantData.imagePath} alt="Uploaded_Image" className='h-[300px] bg-cover'/>
					</div>
				}
					<div
						className='w-[700px] h-[70px] rounded-[5px] mt-[30px] border-solid border-[3px] border-[#dadada] flex justify-center items-start flex-col pl-[20px]'>
						{
							<div key={plantData.imagePath}>
								<p>{plantData.plantData.scientificName}</p>
								<p>{plantData.plantData.englishName} - {plantData.plantData.sinhalaName}</p>
								<a href={plantData.plantData.url}>Learn more...</a>
							</div>
						}
					</div>

					<div className='w-[700px] h-[50px] flex flex-row items-center mt-[10px] justify-end'>
						{userIsAuthenticated() ?
							<button className="w-[120px] h-[30px] rounded-[5px] bg-[#ccc] text-[#000] mr-[10px]"
									onClick={() => {
										navigate(`/sell/${plantData.plantData.englishName}`);
										close()
									}}>Sell this Plant
							</button> : <></>
						}
						<button className="w-[120px] h-[30px] rounded-[5px] bg-[#ccc] text-[#000]" onClick={close}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewResult
