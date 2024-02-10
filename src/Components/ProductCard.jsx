import { IoMdHeartEmpty } from "react-icons/io";
export function ProductCard({data}) {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	const plantName = 'Balloon vine'

	return (
		<div className={`bg-gray-50 rounded-[10px] w-[19vw] h-[30vw] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.3)]`} >
			<div className={`relative flex justify-end rounded-[10px] p-2`}
				style={{
					height: '19vw',
					backgroundImage: `url('/ProductImages/${plantName}${getRandomInt(0,2)}.jpg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<div className={`bg-white rounded-full p-1`} style={{ position: 'absolute', display: 'inline-block', right: "10px" , top: "10px"}}>
					<IoMdHeartEmpty className={`text-gray-400 text-3xl`}/>
				</div>

			</div>
			<div className={`flex flex-col p-2`}>
				<div className={`font-bold text-justify h-[75px]`}>{data.description}</div>
				<div>
					<div className={`text-[25px] font-semibold`}>Rs.{data.price} - {getRandomInt(1,6)*50}g</div>
					<div className={`text-red-600 text-[20px] font-semibold`}>{getRandomInt(1, 14)}+kg sold</div>
				</div>
			</div>
		</div>
	)
}