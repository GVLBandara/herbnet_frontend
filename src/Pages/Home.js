import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [searchKey, setSearchKey] = useState({
		key: '',
		part: '*',
		state: '*',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setSearchKey({ ...searchKey, [name]: value });
	};

	const handleSearch = () => {
		if (searchKey.key == '') {
			alert('Search keyword cannot be empty!');
		} else {
			navigate(`/search/${searchKey.key}/${searchKey.part}/${searchKey.state}`);
		}
	};

	return (
		<div className={`flex justify-around items-center h-[85vh] relative z-0`}>
			<div className={`flex flex-col gap-10`}>
				<h1 className={`text-white text-6xl font-bold text-center w-[60vw]`}>
					Your Marketplace for Buying & Selling Quality Herbal Tree Parts!
				</h1>
				<div
					className={`bg-white h-20 flex justify-between	 items-center mx-12 p-1 rounded-[13px]`}
				>
					<input
						className={`pl-4 h-full w-[35vw] text-4xl font-medium text-[#7b7b7b] focus:outline-none placeholder:text-[#7b7b7b]`}
						type={'text'}
						placeholder={'Search for Products'}
						name="key"
						onChange={handleChange}
						onKeyDown={(event) => {
							if (event.key === 'Enter') handleSearch();
						}}
					/>

					<div className={`flex gap-1 h-full`}>
						<div
							className={`h-full text-3xl text-[#7b7b7b] font-medium bg-gray-200 rounded-[8px] flex justify-around items-center gap-1 px-2`}
						>
							<div className="relative">
								<select
									className={`bg-gray-200 appearance-none pl-1 pr-8 focus:outline-none`}
									name="part"
									value={searchKey.part}
									onChange={handleChange}
								>
									<option value="*">All Parts</option>
									<option value="Roots">Roots</option>
									<option value="Leaves">Leaves</option>
									<option value="Fruits">Fruits</option>
									<option value="Flowers">Flowers</option>
								</select>
								<div
									className={`absolute inset-y-0 right-0 flex items-center pointer-events-none`}
								>
									<IoIosArrowDown
										className={`fill-current text-3xl text-gray-500`}
									/>
								</div>
							</div>
						</div>

						<div
							className={`h-full text-3xl text-[#7b7b7b] font-medium bg-gray-200 rounded-[8px] flex justify-around items-center gap-1 px-2`}
						>
							<div className="relative">
								<select
									className={`bg-gray-200 appearance-none pl-1 pr-8 focus:outline-none`}
									name="state"
									value={searchKey.state}
									onChange={handleChange}
								>
									<option value="*">All States</option>
									<option value="Fresh">Fresh</option>
									<option value="Dried">Dried</option>
									<option value="Juiced">Juiced</option>
									<option value="Powdered">Powdered</option>
								</select>
								<div
									className={`absolute inset-y-0 right-0 flex items-center pointer-events-none`}
								>
									<IoIosArrowDown
										className={`fill-current text-3xl text-gray-500`}
									/>
								</div>
							</div>
						</div>

						<div
							className={`h-full text-5xl text-[#7b7b7b] bg-gray-200 rounded-[8px] flex justify-around items-center px-4 cursor-pointer`}
							onClick={handleSearch}
						>
							<IoSearchSharp />
						</div>
					</div>
				</div>
				<div className={`flex justify-center`}>
					<h1
						className={`text-[27px] text-gray-400 font-semibold flex items-center`}
					>
						Popular:
						<span className={`text-white ml-2`}>
							Ginseng Roots, Eucalyptus Leaves, Lavender Buds, Moringa Seeds
						</span>
						<BsThreeDots
							className={`text-4xl text-white bg-white bg-opacity-40 rounded-full ml-2`}
						/>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
