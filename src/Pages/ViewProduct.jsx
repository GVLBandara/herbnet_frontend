import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../API/API';
import { useAuth } from '../Components/AuthContext';

export function ViewProduct() {
	useEffect(() => {
		getProduct();
	});

	const { productId } = useParams();
	const auth = useAuth();
	const [product, setProduct] = useState({
		productId: 1,
		userId: 1,
		userName: 'John',
		plantName: 'Candle Bush',
		species: {
			speciesId: 1,
			scientificName: 'Senna alata',
			englishName: 'Candle Bush',
			sinhalaName: 'ඇත්තෝර',
			url: 'https://en.wikipedia.org/wiki/Senna_alata',
		},
		plantOrgan: 'Leaves',
		processingMethod: 'Dried',
		price: '16.0',
		location: 'City A',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sapiente.',
		additionalInformation:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda at debitis delectus fuga impedit maiores minus nobis nulla obcaecati officiis placeat quas quo quos sint ut voluptatem voluptates! Beatae dignissimos dolor perferendis rem reprehenderit. Cum cumque et eum minus quibusdam repellat sequi vel voluptas voluptates. Adipisci consequatur dolorum modi!',
		harvestDate: '20/11/2023',
		listingDate: '20/11/2023',
	});

	const getProduct = async () => {
		try {
			const response = await API.getProduct(auth.getUser(), productId);
			setProduct(response.data);
			setProduct({
				...response.data,
				plantName: 'Balloon vine',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sapiente.',
				additionalInformation:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda at debitis delectus fuga impedit maiores minus nobis nulla obcaecati officiis placeat quas quo quos sint ut voluptatem voluptates! Beatae dignissimos dolor perferendis rem reprehenderit. Cum cumque et eum minus quibusdam repellat sequi vel voluptas voluptates. Adipisci consequatur doloru',
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className={`w-full h-[calc(100vh-98px)] flex justify-center items-center`}
		>
			<div
				className={`bg-white bg-opacity-50 h-[86vh] w-[95vw] rounded-[30px]`}
			>
				<div
					className={`h-full w-full flex justify-between gap-4 p-16 rounded-[30px]`}
				>
					<div
						className={`aspect-square bg-cover bg-no-repeat bg-center`}
						style={{
							backgroundImage: `url('/ProductImages/${product.plantName}1.jpg')`,
						}}
					/>
					<div
						className={`bg-white h-full w-full pl-[20px] pr-[20px] pt-[15px]`}
					>
						<b>
							<p className={'text-[24px] mb-[15px]'}>Premium Turmeric Roots</p>
						</b>
						<span className={'text-[18px]'}>
							<table className={'w-full'}>
								<tbody>
									<tr>
										<td className={'w-[23%]'}>
											<p>
												<b>ScientificName</b>
											</p>
										</td>
										<td>
											<p>: {product.species.scientificName}</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p>
												<b>EnglishName</b>
											</p>
										</td>
										<td>
											<p>: {product.species.englishName}</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p>
												<b>sinhalaName</b>
											</p>
										</td>
										<td>
											<p>: {product.species.sinhalaName}</p>
										</td>
									</tr>
									<tr>
										<a className={`text-blue-600`} href={product.species.url}>
											<u>Learn more...</u>
										</a>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p>
												<b>Part</b>
											</p>
										</td>
										<td>
											<p>: {product.plantOrgan}</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p>
												<b>Possessing Method</b>
											</p>
										</td>
										<td>
											<p>: {product.processingMethod}</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p className={'mb-[15px]'}>
												<b>Description</b>
											</p>
										</td>
										<td>
											<p>: {product.description}</p>
										</td>
									</tr>
								</tbody>
							</table>

							<p className={'mb-[15px]'}>
								<b>Additional Information:</b>
								<br />
								{product.additionalInformation}
							</p>
						</span>
						<span className={'text-[22px]'}>
							<p className={'mb-[15px]'}>
								Price: <span className={'text-[red]'}>Rs.{product.price}</span>{' '}
								per pack
							</p>
						</span>
						<span className={'text-[18px]'}>
							<table className={'w-full'}>
								<tbody>
									<tr>
										<td className={'w-[23%]'}>
											<p>Quantity Available</p>
										</td>
										<td>
											<p>: 100 packs</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p>Harvest Date</p>
										</td>
										<td>
											<p>: {product.harvestDate}</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p>Origin</p>
										</td>
										<td>
											<p>: {product.location}</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p>Listing Date</p>
										</td>
										<td>
											<p>: {product.listingDate}</p>
										</td>
									</tr>

									<tr>
										<td className={'w-[23%]'}>
											<p className={'mb-[20px]'}>Seller</p>
										</td>
										<td>
											<p className={'mb-[20px]'}>: {product.userName}</p>
										</td>
									</tr>
								</tbody>
							</table>
						</span>
						<button
							className={`h-[45px] bg-[#008f85] text-[#fff] text-4xl rounded-[10px] text-[18px] px-4`}
						>
							Contact Seller
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
