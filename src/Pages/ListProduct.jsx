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
		<div className={`flex justify-around items-center h-[85vh]`}>
			<div
				className={`bg-white bg-opacity-40 flex flex-col justify-between h-[85vh] w-[60vw]`}
			>
				<div className={`flex flex-col items-center gap-1`}>
					<p className={`text-5xl`}>HerbNet Listing Submission Form</p>
					<p className={`text-3xl`}>
						Fill out the details below to showcase and sell your herbal products
						on HerbNet!
					</p>
				</div>

				<form className={`flex flex-col text-[20px] items-center`}>
					<div className={`flex h-full w-4/5 px-2 gap-8`}>
						<div className={`flex-grow w-1/5`}>
							<div>
								<h2>Plant Organ:</h2>
								<div>
									<input
										type="radio"
										id="flowers"
										name="plantOrgan"
										value="Flowers"
										checked={formData.plantOrgan === 'Flowers'}
										onChange={handleChange}
									/>
									<label htmlFor="flowers">Flowers</label>
								</div>
								<div>
									<input
										type="radio"
										id="fruits"
										name="plantOrgan"
										value="Fruits"
										checked={formData.plantOrgan === 'Fruits'}
										onChange={handleChange}
									/>
									<label htmlFor="fruits">Fruits</label>
								</div>
								<div>
									<input
										type="radio"
										id="leaves"
										name="plantOrgan"
										value="Leaves"
										checked={formData.plantOrgan === 'Leaves'}
										onChange={handleChange}
									/>
									<label htmlFor="leaves">Leaves</label>
								</div>
								<div>
									<input
										type="radio"
										id="roots"
										name="plantOrgan"
										value="Roots"
										checked={formData.plantOrgan === 'Roots'}
										onChange={handleChange}
									/>
									<label htmlFor="roots">Roots</label>
								</div>
								<div>
									<input
										type="radio"
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
								<h2>Processing Method:</h2>
								<div>
									<input
										type="radio"
										id="dried"
										name="processingMethod"
										value="Dried"
										checked={formData.processingMethod === 'Dried'}
										onChange={handleChange}
									/>
									<label htmlFor="dried">Dried</label>
								</div>
								<div>
									<input
										type="radio"
										id="fresh"
										name="processingMethod"
										value="Fresh"
										checked={formData.processingMethod === 'Fresh'}
										onChange={handleChange}
									/>
									<label htmlFor="fresh">Fresh</label>
								</div>
								<div>
									<input
										type="radio"
										id="ground"
										name="processingMethod"
										value="Ground"
										checked={formData.processingMethod === 'Ground'}
										onChange={handleChange}
									/>
									<label htmlFor="ground">Ground</label>
								</div>
								<div>
									<input
										type="radio"
										id="juiced"
										name="processingMethod"
										value="Juiced"
										checked={formData.processingMethod === 'Juiced'}
										onChange={handleChange}
									/>
									<label htmlFor="juiced">Juiced</label>
								</div>
								<div>
									<input
										type="radio"
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
								<h2>Quality Grade:</h2>
								<div>
									<input type="radio" />
									<label htmlFor="premium">Premium</label>
								</div>
								<div>
									<input type="radio" />
									<label htmlFor="standard">Standard</label>
								</div>
								<div>
									<input type="radio" />
									<label htmlFor="bulk">Bulk</label>
								</div>
							</div>

							<div>
								<h2>Contact Information:</h2>
								<div>
									<input type="checkbox" />
									<label htmlFor="name">Name</label>
								</div>
								<div>
									<input type="checkbox" />
									<label htmlFor="email">Email</label>
								</div>
								<div>
									<input type="checkbox" />
									<label htmlFor="phone">Phone</label>
								</div>
							</div>
						</div>

						<div className={`flex flex-col justify-between mb-8 w-3/5`}>
							<div className={`flex justify-between`}>
								<label htmlFor="plantName">Plant Name:</label>
								<input
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
							<div className={`flex justify-between`}>
								<label htmlFor="productDescription">Product Description:</label>
								<textarea
									id="description"
									name="description"
									value={formData.description}
									onChange={handleChange}
								/>
							</div>
							<div className={`flex justify-between`}>
								<label htmlFor="additionalInformation">
									Additional Information:
								</label>
								<textarea
									id="additionalInformation"
									name="additionalInformation"
									value={formData.additionalInformation}
									onChange={handleChange}
								/>
							</div>
							<div className={`flex justify-between`}>
								<label htmlFor="price">Price:</label>
								<input
									type="text"
									id="price"
									name="price"
									value={formData.price}
									onChange={handleChange}
									pattern="^\d+(\.\d{1,2})?$"
									title="Enter a valid price (e.g., 10 or 10.50)"
								/>
							</div>
							<div className={`flex justify-between`}>
								<label htmlFor="qualityAvailable">Quality Available:</label>
								<input
									type="text"
									pattern="^\d+(\.\d{1})?$"
									title="Enter a valid number"
								/>
							</div>
							<div className={`flex justify-between`}>
								<label htmlFor="origin">Origin:</label>
								<input type="text" />
							</div>
							<div className={`flex justify-between`}>
								<label htmlFor="storageRecommendations">
									Storage Recommendations:
								</label>
								<textarea />
							</div>
							<div className={`flex justify-between`}>
								<label htmlFor="harvestDate">Harvest Date:</label>
								<input
									type="date"
									id="harvestDate"
									name="harvestDate"
									value={formData.harvestDate}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className={`flex-grow w-1/5`}>
							<h2>Select Province:</h2>
							<div>
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
							<div>
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
							<div>
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
							<div>
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
							<div>
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
							<div>
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
							<div>
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
							<div>
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
							<div>
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
								className={`w-[70px] h-[45px] bg-[#fff] rounded-[10px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
								onClick={handleSubmit}
							>
								SUBMIT
							</button>
						) : (
							<button
								className={`w-[70px] h-[45px] bg-[#fff] rounded-[10px] text-[18px] font-semibold hover:bg-[#17c270] text-[#000] hover:text-[#fff]`}
								onClick={handleUpdate}
							>
								UPDATE
							</button>
						)}

						<p>
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
