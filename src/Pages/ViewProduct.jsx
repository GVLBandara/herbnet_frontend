import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {API} from "../API/API";
import {useAuth} from "../Components/AuthContext";

export function ViewProduct() {
	useEffect(() => {
		getProduct();
	}, []);

	const {productId} = useParams();
	const auth = useAuth();
	const [product, setProduct] = useState({
		"productId": 1,
		"userId": 1,
		"userName": "John",
		"plantName": "Candle Bush",
		"species": {
			"speciesId": 1,
			"scientificName": "Senna alata",
			"englishName": "Candle Bush",
			"sinhalaName": "ඇත්තෝර",
			"url": "https://en.wikipedia.org/wiki/Senna_alata"
		},
		"plantOrgan": "Leaves",
		"processingMethod": "Dried",
		"price": "16.0",
		"location": "City A",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sapiente.",
		"additionalInformation": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda at debitis delectus fuga impedit maiores minus nobis nulla obcaecati officiis placeat quas quo quos sint ut voluptatem voluptates! Beatae dignissimos dolor perferendis rem reprehenderit. Cum cumque et eum minus quibusdam repellat sequi vel voluptas voluptates. Adipisci consequatur dolorum modi!",
		"harvestDate": "20/11/2023",
		"listingDate": "20/11/2023"
	})

	const getProduct = async () => {
		try {
			const response = await API.getProduct(auth.getUser(), productId);
			setProduct(response.data)
			setProduct({
				...response.data,
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sapiente.",
				additionalInformation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda at debitis delectus fuga impedit maiores minus nobis nulla obcaecati officiis placeat quas quo quos sint ut voluptatem voluptates! Beatae dignissimos dolor perferendis rem reprehenderit. Cum cumque et eum minus quibusdam repellat sequi vel voluptas voluptates. Adipisci consequatur doloru"
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={`w-full h-[calc(100vh-98px)] flex justify-center items-center`}>
			<div className={`bg-white bg-opacity-50 h-[73vh] w-[95vw] rounded-3xl`}>
				<div className={`h-full w-full flex justify-between gap-4 p-16`}>
					<div
						className={`aspect-square bg-cover bg-no-repeat bg-center bg-[url('../public/ProductImages/Balloon_vine0.jpg')]`}/>
					<div className={`bg-white h-full w-full`}>
						<p>Premium Turmeric Roots</p>
						<p>scientificName: {product.species.scientificName}</p>
						<p>englishName: {product.species.englishName}</p>
						<p>sinhalaName: {product.species.sinhalaName}</p>
						<a className={`text-blue-600`} href={product.species.url}>Learn
							more...</a>
						<p>Part: {product.plantOrgan}</p>
						<p>Possessing Method: {product.processingMethod}</p>
						<p className={`bg-amber-200`}>Description: {product.description}</p>
						<p className={`bg-gray-300`}>Additional Information: {product.additionalInformation}</p>
						<p>Price: Rs.<span>{product.price} per pack</span></p>
						<p>Quantity Available: 100 packs</p>
						<p>Harvest Date: {product.harvestDate}</p>
						<p>Origin: {product.location}</p>
						<p>Listing Date: {product.listingDate}</p>
						<button
							className={`h-[45px] bg-[#008f85] text-[#fff] text-4xl rounded-[10px] text-[18px] px-4`}>Contact
							Seller
						</button>
						<p>Seller: {product.userName}</p>
					</div>
				</div>
			</div>
		</div>
	)
}