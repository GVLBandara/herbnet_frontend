import React, {useState} from 'react'
import closeImg from '../Pages/Images/closebtn.png'
import { AiOutlineLoading } from "react-icons/ai";

const IdentifyImage = ({close, openResult, setPlantData}) => {

	const [image, setImage] = useState("");
	const [isLoading, setIsLoading] = useState(false)

	let imagePath = "";

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		setImage(file);
	};

	const uploadImage = () => {
		if (image.name != null) {
			const formData = new FormData();
			formData.append('image', image)
			setIsLoading(true);

			fetch('http://localhost:5000/upload', {
				method: 'POST',
				body: formData,
			})
				.then(response => response.json())
				.then(data => {
					setPlantData({plantData: data, imagePath: imagePath});
					setIsLoading(false)
					close();
					openResult();
				})
				.catch(error => {
					console.error('Error during upload:', error);
				});
			imagePath = URL.createObjectURL(image);
		} else {
			alert("Please upload image");
		}
	};


	return (
		<div
			className={`w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 bg-[#00000080]`}>
			<div className={`w-[800px] h-[600px] bg-[#fff] rounded-[10px]`}>
				<div className='w-full h-[50px] bg-[#0f824b] rounded-t-[10px] flex items-center'>
					<h1 className='w-[calc(100%-50px)] text-[25px] text-[#fff] flex items-center justify-center font-bold h-[50px]'>Plant
						Identifier</h1>
					<button onClick={close}>
						<img className='w-[50px] h-[40px]' src={closeImg} alt="close_btn"/>
					</button>
				</div>

				<div className='w-[100%] h-[550px] rounded-b-[10px] flex justify-center items-center'>


					{isLoading ? <div className={`animate-spin text-9xl`}><AiOutlineLoading /></div> :
						<div className="w-[600px] h-[400px] bg-[#e2fef0] border-dashed border-[3px] border-[#0f824b]">
							<div className="w-[100%] h-[100%] flex justify-center items-center ">
								<input className='hidden' type="file" accept="image/*" id="upload"
									   onChange={handleImageChange}/>
								<label className='w-[100%] h-[100%] flex justify-center items-center cursor-pointer'
									   htmlFor="upload">
									{image ? (
										<img src={URL.createObjectURL(image)} alt=""
											 className='h-[300px] bg-cover'/>) : (
										<span className='flex'>
                            <p className='
                                w-[160px] h-[50px] bg-[#008f85]
                                rounded-l-[5px] text-[20px] text-[#fff]
                                flex items-center justify-evenly mr-[2px]
                            '>
                            Choose File

                            </p>

                            <p className='
                            w-[40px] h-[50px] bg-[#008f85]
                            rounded-r-[5px] text-[20px] text-[#fff]
                            flex items-center justify-evenly
                            '>
                            </p>
									</span>)
									}
								</label>
							</div>
							<button onClick={uploadImage}
									className="w-[120px] h-[30px] rounded-[5px] bg-[#ccc] text-[#000] mt-[25px] ml-[550px]">
								Upload
							</button>
						</div>
					}
				</div>
			</div>
		</div>
	)
}
export default IdentifyImage
