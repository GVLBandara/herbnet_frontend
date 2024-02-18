import React, { useEffect, useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import { API } from '../API/API';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

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
			const response = await API.deleteProduct(auth.getUser(), productId);
			alert(`Status: ${response.status}`);
			getData();
		} catch (error) {
			console.log(error);
		}
	};

	console.log(prodList);

	const Card = ({ data }) => {
		return (
			<div className="bg-white border-2 border-red-600">
				<h1>{data.plantData}</h1>
				<h1>{data.description}</h1>
				<h1>
					Rs.{data.price} - {getRandomInt(1, 6) * 50}g
				</h1>
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
		);
	};

	return (
		<div>
			{prodList.map((product) => (
				<Card key={product.productId} data={product} />
			))}
		</div>
	);
}
