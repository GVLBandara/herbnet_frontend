import { IoMdHeartEmpty } from "react-icons/io";
export function ProductCard({data}) {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	return (
		<div className={`bg-white rounded-[10px]`} style={{width: "18vw"}}>
			<div className={`relative flex justify-end rounded-[10px] p-2`}
				style={{
					height: '18vw',
					backgroundImage: `url('/ProductImages/${data.plantName}${getRandomInt(0,2)}.jpg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<div className={`bg-white rounded-full p-1`} style={{ position: 'absolute', display: 'inline-block', right: "10px" , top: "10px"}}>
					<IoMdHeartEmpty className={`text-gray-400 text-3xl`}/>
				</div>

			</div>
			<div className={`flex flex-col`}>
				<div className={`font-bold text-justify`}>{data.description}</div>
				<div className={`m-4`}>
					<div className={`text-[25px] font-semibold`}>Rs.{data.price} - {getRandomInt(1,6)*50}g</div>
					<div className={`text-red-600 text-[20px] font-semibold`}>{getRandomInt(1, 14)}+kg sold</div>
				</div>
			</div>
		</div>
	)
}