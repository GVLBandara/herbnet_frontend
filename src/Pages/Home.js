import React, {useState} from 'react'
import {IoIosArrowDown} from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const Home = () => {
	const [part, setPart] = useState("Roots")
	const [state, setState] = useState("Fresh")


	return (
		<div className={`flex justify-around items-center h-[85vh]`}>
			<div className={`flex flex-col gap-10`}>
				<h1 className={`text-white text-6xl font-bold text-center w-[60vw]`}>
					Your Marketplace for Buying & Selling Quality Herbal Tree Parts!
				</h1>
				<div className={`bg-white h-20 flex justify-between	 items-center mx-12 p-1 rounded-[13px]`}>
					<input className={`pl-4 h-full w-[35vw] text-4xl font-medium text-[#7b7b7b] placeholder:text-[#7b7b7b]`} type={"text"} placeholder={"Search for Products"}/>
					<div className={`flex gap-1 h-full`}>
						<div
							className={`h-full text-3xl text-[#7b7b7b] font-medium bg-gray-200 rounded-[8px] flex justify-around items-center gap-1 px-2`}>
							<h1>Roots</h1>
							<IoIosArrowDown/>
						</div>
						<div
							className={`h-full text-3xl text-[#7b7b7b] font-medium bg-gray-200 rounded-[8px] flex justify-around items-center gap-1 px-2`}>
							<h1>Fresh</h1>
							<IoIosArrowDown/>
						</div>
						<div
							className={`h-full text-5xl text-[#7b7b7b] bg-gray-200 rounded-[8px] flex justify-around items-center px-4`}>
							<IoSearchSharp/>
						</div>
					</div>
				</div>
				<div className={`flex justify-center`}>
					<h1 className={`text-[27px] text-gray-400 font-semibold flex items-center`}>Popular:
						<span className={`text-white ml-2`}>Ginseng Roots, Eucalyptus Leaves, Lavender Buds, Moringa Seeds</span>
						<BsThreeDots className={`text-4xl text-white bg-white bg-opacity-40 rounded-full ml-2`}/>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default Home
