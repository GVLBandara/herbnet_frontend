import { ProductCard } from '../Components/ProductCard';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { API } from '../API/API';
import { useParams } from 'react-router-dom';

export function SearchResult() {
	const params = useParams();
	const [prodList, setProdList] = useState([]);

	useEffect(() => {
		search();
	});

	const searchKey = {
		key: params.key,
		part: params.part,
		state: params.state,
	};

	const search = async (e) => {
		try {
			const response = await API.search(searchKey);
			setProdList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const [formData, setFormData] = useState({
		plantOrgan: '',
		processingMethod: '',
		location: '',
	});

	const capitalizeWords = (str) => {
		return str.replace(/\b\w/g, (match) => match.toUpperCase());
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className={`bg-white flex justify-between h-[calc(100vh-98px)]`}>
			<div className={`bg-gray-100 w-[15vw]`}>
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

				<div className={`flex-grow`}>
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
			<div>
				<div className={`flex justify-between items-center px-5`}>
					<div className={`pt-5`}>
						<p className={`text-5xl text-gray-500`}>
							Showing Results for{' '}
							<span className={`text-black`}>
								{capitalizeWords(searchKey.key)}
							</span>
						</p>
						<p className={`text-3xl`}>154 Results</p>
					</div>
					<div>
						<div
							className={`text-2xl text-[#7b7b7b] font-medium bg-gray-200 rounded-[8px] flex justify-around items-center gap-1 px-2 relative h-[55px]`}
						>
							<p
								className={`bg-gray-200 appearance-none pl-1 pr-8 focus:outline-none`}
							>
								Sort: Best Match
							</p>
							<div
								className={`absolute inset-y-0 right-0 flex items-center pointer-events-none px-2`}
							>
								<IoIosArrowDown
									className={`fill-current text-2xl text-gray-500`}
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-[85vw] h-[calc(100vh-222px)] p-5 overflow-scroll overflow-x-hidden`}
				>
					{prodList.map((product) => (
						<ProductCard key={product.productId} data={product} />
					))}
				</div>
			</div>
		</div>
	);
}
