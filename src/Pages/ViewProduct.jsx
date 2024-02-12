export function ViewProduct() {
	return (
		<div className={`w-full h-[calc(100vh-98px)] flex justify-center items-center`}>
			<div className={`bg-white bg-opacity-50 h-[73vh] w-[95vw] rounded-3xl`}>
				<div className={`h-full w-full flex justify-between gap-4 p-16`}>
					<div
						className={`aspect-square bg-cover bg-no-repeat bg-center bg-[url('../public/ProductImages/Balloon_vine0.jpg')]`}/>
					<div className={`bg-white h-full w-full`}>
						<p>Premium Turmeric Roots</p>
						<p>scientificName: Senna alata</p>
						<p>englishName: Candle Bush</p>
						<p>sinhalaName: ඇත්තෝර</p>
						<a className={`text-blue-600`} href="https://en.wikipedia.org/wiki/Senna_alata">Learn
							more...</a>
						<p>Part: Roots</p>
						<p>Possessing Method: Dried</p>
						<p className={`bg-amber-200`}>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, vel.</p>
						<p className={`bg-gray-300`}>Additional Information: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam
							aut autem consequatur consequuntur deleniti dolore dolores ducimus eos magnam odio, officia
							perferendis quas quia quisquam recusandae sunt veritatis. Ad alias beatae culpa cum
							cupiditate, dolorem doloribus, eveniet fugiat impedit nobis pariatur quisquam recusandae
							rem, tempora temporibus ullam veniam? Cupiditate?</p>
						<p>Price: Rs.<span>12.99 per pack</span></p>
						<p>Quantity Available: 100 packs</p>
						<p>Harvest Date: January 15, 2014</p>
						<p>Origin: Western Province</p>
						<p>Listing Date: January 15, 2014</p>
						<button
							className={`h-[45px] bg-[#008f85] text-[#fff] text-4xl rounded-[10px] text-[18px] px-4`}>Contact
							Seller
						</button>
						<p>Seller: John Doe</p>
					</div>
				</div>
			</div>
		</div>
	)
}