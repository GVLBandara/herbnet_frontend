import React, { useEffect, useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import { API } from '../API/API';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';

export function MyProducts() {
	const auth = useAuth();
	const navigate = useNavigate();

	const [prodList, setProdList] = useState([
		{
			productId: 1,
			plantName: 'Candle Bush',
			plantData: 'Dried Candle Bush Leaves',
			description: 'Description1',
			price: '16.00',
		},
		{
			productId: 11,
			plantName: 'Candle Bush',
			plantData: 'Dried Candle Bush Leaves',
			description: 'New ',
			price: '251.00',
		},
		{
			productId: 12,
			plantName: 'Candle Bush',
			plantData: 'Dried Candle Bush Flowers',
			description: 'dsada',
			price: '153.00',
		},
	]);

	useEffect(() => {
		getData();
	}, []);

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	const getData = async (e) => {
		try {
			const response = await API.getMyProducts(auth.getUser());
			setProdList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const edit = (productId) => {
		navigate(`/edit/${productId}`);
	};

	const deleteProd = async (productId) => {
		try {
			await API.deleteProduct(auth.getUser(), productId);
			getData();
		} catch (error) {
			console.log(error);
		}
	};

	console.log(prodList);

	const Card = ({ data }) => {
		return (
			<div
				className={`bg-gray-50 rounded-[10px] w-full h-fit shadow-[0px_0px_10px_4px_rgba(0,0,0,0.3)]`}
				onClick={() => {
					navigate(`/view/${data.productId}`);
				}}
			>
				<div
					className={`relative flex justify-end rounded-[10px] p-2`}
					style={{
						height: '15vw',
						backgroundImage: `url('/ProductImages/${
							data.plantName
						}${getRandomInt(0, 3)}.jpg')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<div className={`flex flex-col p-2`}>
					<div className={`font-bold`}>{data.plantData}</div>
					<div className={`font-bold text-justify`}>{data.description}</div>
					<div className={`flex justify-between`}>
						<FiEdit
							className="text-4xl"
							onClick={() => {
								edit(data.productId);
							}}
						/>
						<RiDeleteBin5Line
							className="text-4xl"
							onClick={() => {
								deleteProd(data.productId);
							}}
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div
			className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7 h-[calc(100vh-100px)] p-5 overflow-scroll overflow-x-hidden`}
		>
			{prodList.map((product) => (
				<Card key={product.productId} data={product} />
			))}
		</div>
	);
}
