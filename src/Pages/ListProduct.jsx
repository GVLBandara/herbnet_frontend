import { useEffect, useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import { API } from '../API/API';
import { useNavigate, useParams } from 'react-router-dom';

export function ListProduct() {
	const { plantName, productId } = useParams();
	const navigate = useNavigate();
	const auth = useAuth();
	const [formData, setFormData] = useState({
		plantName: '',
		description: '',
		additionalInformation: '',
		price: '',
		harvestDate: '',
		plantOrgan: '',
		processingMethod: '',
		location: '',
	});
	const [isNew, setIsNew] = useState(true);

	useEffect(() => {
		if (plantName) {
			setIsNew(true);
			setFormData({
				...formData,
				plantName: plantName.split('%20').join(' '),
				processingMethod: 'Fresh',
			});
		} else if (productId) {
			setIsNew(false);
			getProduct();
		}
	}, []);

	const getProduct = async () => {
		try {
			const response = await API.getProduct(auth.getUser(), productId);
			setFormData({
				...response.data,
				harvestDate: formatDate(response.data.harvestDate),
			});
		} catch (error) {
			console.log(error);
		}
	};

	const formatDate = (date) => {
		const [day, month, year] = date.split('/');
		return `${year}-${month}-${day}`;
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (formData.plantName && formData.harvestDate) {
			try {
				const response = await API.addProduct(auth.getUser(), formData);
				console.log(response.status);
			} catch (error) {
				console.log(error);
			}
		} else {
			alert('Insert plant name and harvest date');
		}
		console.log('Form submitted:', formData);
		alert('Product listed successfully');
		navigate('/myproducts');
	};

	const handleUpdate = async (event) => {
		event.preventDefault();

		if (formData.productId && formData.plantName && formData.harvestDate) {
			try {
				const response = await API.updateProduct(auth.getUser(), formData);
				console.log(response.status);
			} catch (error) {
				console.log(error);
			}
		} else {
			alert('Insert plant name and harvest date');
		}
		console.log('Product Updated:', formData);
		alert('Product updated successfully');
		navigate('/myproducts');
	};

	return (
		<div className={`w-full flex justify-center items-center h-[85vh]`}>
			<div
				className={`bg-white bg-opacity-60 flex flex-col justify-center h-[85vh] w-[80vw]`}
			>
				<div className={`flex flex-col items-center gap-1`}>
					<p className={`text-[32px] font-medium`}>HerbNet Listing Submission Form</p>
					<p className={`text-[16px]`}>
						Fill out the details below to showcase and sell your herbal products
						on HerbNet!
					</p>
				</div>

				<form className={`w-full flex flex-col text-[16px] items-center justify-center p-[20px]`}>
					<div className={`w-3/4 h-full flex px-2 gap-8`}>
						<div className={`flex-grow`}>
							<div className='flex flex-col'>
								<h2 className='text-[20px] font-medium'>Plant Organ</h2>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="flowers"
										name="plantOrgan"
										value="Flowers"
										checked={formData.plantOrgan === 'Flowers'}
										onChange={handleChange}
									/>
									<label htmlFor="flowers">Flowers</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="fruits"
										name="plantOrgan"
										value="Fruits"
										checked={formData.plantOrgan === 'Fruits'}
										onChange={handleChange}
									/>
									<label htmlFor="fruits">Fruits</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="leaves"
										name="plantOrgan"
										value="Leaves"
										checked={formData.plantOrgan === 'Leaves'}
										onChange={handleChange}
									/>
									<label htmlFor="leaves">Leaves</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="roots"
										name="plantOrgan"
										value="Roots"
										checked={formData.plantOrgan === 'Roots'}
										onChange={handleChange}
									/>
									<label htmlFor="roots">Roots</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="seeds"
										name="plantOrgan"
										value="Seeds"
										checked={formData.plantOrgan === 'Seeds'}
										onChange={handleChange}
									/>
									<label htmlFor="seeds">Seeds</label>
								</div>
							</div>

							<div>
								<h2 className='text-[20px] font-medium'>Processing Method</h2>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="dried"
										name="processingMethod"
										value="Dried"
										checked={formData.processingMethod === 'Dried'}
										onChange={handleChange}
									/>
									<label htmlFor="dried">Dried</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="fresh"
										name="processingMethod"
										value="Fresh"
										checked={formData.processingMethod === 'Fresh'}
										onChange={handleChange}
									/>
									<label htmlFor="fresh">Fresh</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="ground"
										name="processingMethod"
										value="Ground"
										checked={formData.processingMethod === 'Ground'}
										onChange={handleChange}
									/>
									<label htmlFor="ground">Ground</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="juiced"
										name="processingMethod"
										value="Juiced"
										checked={formData.processingMethod === 'Juiced'}
										onChange={handleChange}
									/>
									<label htmlFor="juiced">Juiced</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input
										type="checkbox"
										id="powdered"
										name="processingMethod"
										value="Powdered"
										checked={formData.processingMethod === 'Powdered'}
										onChange={handleChange}
									/>
									<label htmlFor="powdered">Powdered</label>
								</div>
							</div>

							<div>
								<h2 className='text-[20px] font-medium'>Quality Grade</h2>
								<div className='flex flex-row gap-[10px]'>
									<input type="checkbox" />
									<label htmlFor="premium">Premium</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input type="checkbox" />
									<label htmlFor="standard">Standard</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input type="checkbox" />
									<label htmlFor="bulk">Bulk</label>
								</div>
							</div>

							<div>
								<h2 className='text-[20px] font-medium'>Contact Information</h2>
								<div className='flex flex-row gap-[10px]'>
									<input type="checkbox" />
									<label htmlFor="name">Name</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input type="checkbox" />
									<label htmlFor="email">Email</label>
								</div>
								<div className='flex flex-row gap-[10px]'>
									<input type="checkbox" />
									<label htmlFor="phone">Phone</label>
								</div>
							</div>
						</div>

						<div className={`flex flex-col justify-between mb-8 w-1/2`}>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="plantName">Plant Name</label>
								<input
									className='w-full rounded-[5px]'
									type="text"
									id="plantName"
									name="plantName"
									value={formData.plantName}
									onChange={handleChange}
									list="plantNamesList"
								/>
								<datalist id="plantNamesList">
									<option value="Candle Bush" />
									<option value="Long Pepper" />
									<option value="Sweet Flag" />
									<option value="Light blue snakeweed" />
									<option value="Ming aralia" />
									<option value="Skunk vine" />
									<option value="Balloon vine" />
									<option value="Grey Nicker" />
									<option value="Malabar nut" />
								</datalist>
							</div>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="productDescription">Product Description:</label>
								<textarea
									className='w-full rounded-[5px]'
									id="description"
									name="description"
									value={formData.description}
									onChange={handleChange}
								/>
							</div>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="additionalInformation">
									Additional Information:
								</label>
								<textarea
									className='w-full rounded-[5px]'
									id="additionalInformation"
									name="additionalInformation"
									value={formData.additionalInformation}
									onChange={handleChange}
								/>
							</div>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="price">Price:</label>
								<input
									className='w-full rounded-[5px]'
									type="text"
									id="price"
									name="price"
									value={formData.price}
									onChange={handleChange}
									pattern="^\d+(\.\d{1,2})?$"
									title="Enter a valid price (e.g., 10 or 10.50)"
								/>
							</div>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="qualityAvailable">Quality Available:</label>
								<input
									className='w-full rounded-[5px]'
									type="text"
									pattern="^\d+(\.\d{1})?$"
									title="Enter a valid number"
								/>
							</div>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="harvestDate">Harvest Date</label>
								<input
									className='w-1/2 rounded-[5px]'
									type="date"
									id="harvestDate"
									name="harvestDate"
									value={formData.harvestDate}
									onChange={handleChange}
								/>
							</div>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="origin">Origin:</label>
								<input 
								className='w-full rounded-[5px]'
								type="text" />
							</div>
							<div className="flex flex-col gap-[2px]">
								<label htmlFor="storageRecommendations">
									Storage Recommendations:
								</label>
								<textarea className='w-full rounded-[5px]'/>
							</div>
						</div>

						<div className={`flex-grow w-1/5`}>
							<h2 className='text-[20px] font-medium'>Select Province</h2>
							<div className='flex flex-row gap-[10px]'>
								<input
									type="radio"
									id="southern"
									value="Southern"
									name="location"
									checked={formData.location === 'Southern'}
									onChange={handleChange}
								/>
								<label htmlFor="southern">Southern</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
									type="radio"
									id="western"
									value="Western"
									name="location"
									checked={formData.location === 'Western'}
									onChange={handleChange}
								/>
								<label htmlFor="western">Western</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
		
									type="radio"
									id="central"
									value="Central"
									name="location"
									checked={formData.location === 'Central'}
									onChange={handleChange}
								/>
								<label htmlFor="central">Central</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
									
									type="radio"
									id="sabaragamuwa"
									value="Sabaragamuwa"
									name="location"
									checked={formData.location === 'Sabaragamuwa'}
									onChange={handleChange}
								/>
								<label htmlFor="sabaragamuwa">Sabaragamuwa</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
							
									type="radio"
									id="eastern"
									value="Eastern"
									name="location"
									checked={formData.location === 'Eastern'}
									onChange={handleChange}
								/>
								<label htmlFor="eastern">Eastern</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
									
									type="radio"
									id="uva"
									value="Uva"
									name="location"
									checked={formData.location === 'Uva'}
									onChange={handleChange}
								/>
								<label htmlFor="uva">Uva</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
									
									type="radio"
									id="north-western"
									value="North Western"
									name="location"
									checked={formData.location === 'North Western'}
									onChange={handleChange}
								/>
								<label htmlFor="north-western">North Western</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
									
									type="radio"
									id="north-central"
									value="North Central"
									name="location"
									checked={formData.location === 'North Central'}
									onChange={handleChange}
								/>
								<label htmlFor="north-central">North Central</label>
							</div>
							<div className='flex flex-row gap-[10px]'>
								<input
									
									type="radio"
									id="northern"
									value="Northern"
									name="location"
									checked={formData.location === 'Northern'}
									onChange={handleChange}
								/>
								<label htmlFor="northern">Northern</label>
							</div>
						</div>
					</div>
					<div className={`flex justify-center items-center gap-4`}>
						{isNew ? (
							<button
								className={`h-[45px] bg-[#fff] rounded-[10px] px-[16px] py-[8px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
								onClick={handleSubmit}
							>
								SUBMIT
							</button>
						) : (
							<button
								className={`h-[45px] bg-[#fff] rounded-[10px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
								onClick={handleUpdate}
							>
								UPDATE
							</button>
						)}

						<p className='text-[12px] font-semibold'>
							By clicking SUBMIT you are agreeing to
							<br />
							HerbNet's terms and conditions.
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
