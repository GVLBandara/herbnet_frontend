import {ProductCard} from "../Components/ProductCard";
import React, {useState} from "react";
import {IoIosArrowDown} from "react-icons/io";

export function SearchResult({prodList}) {
	const [formData, setFormData] = useState({
		plantOrgan: '',
		processingMethod: '',
		location: ''
	});

	const searchKey = 'Moringa Seeds'

	const data = {
		productId: 1,
		plantName: "Balloon vine",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum laboriosam necessitatibus rem tempore voluptatibus!",
		price: "175.00"
	}

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormData({...formData, [name]: value});
	};

	return (
		<div className={`bg-white flex justify-around`}>
			<div className={`bg-amber-300`} style={{"width": "16vw"}}>
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
				<div className={`flex justify-between items-center`}>
					<div className={`p-3`} style={{padding: "15px"}}>
						<p className={`text-5xl`}>Showing Results for <span>{searchKey}</span></p>
						<p className={`text-3xl`}>154 Results</p>
					</div>
					<div>
						<div className={`text-2xl text-[#7b7b7b] font-medium bg-gray-200 rounded-[8px] flex justify-around items-center gap-1 px-2 relative`}
						style={{height: "55px"}}>
							<p className={`bg-gray-200 appearance-none pl-1 pr-8 focus:outline-none`}>
								Sort: Best Match
							</p>
							<div className={`absolute inset-y-0 right-0 flex justify-center items-center pointer-events-none`}>
								<IoIosArrowDown className={`fill-current text-2xl text-gray-500`}/>
							</div>
						</div>
					</div>
				</div>
				<div className={`flex justify-between`} style={{width: "80vw", flexWrap: "wrap", gap: "20px"}}>
					{prodList.map(product => <ProductCard key={product.productId} data={product}/>)}
				</div>
			</div>
		</div>
	)
}