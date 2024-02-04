import {ProductCard} from "../Components/ProductCard";

export function SearchResult() {
	const data = {
		productId: 1,
		plantName: "Balloon vine",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum laboriosam necessitatibus rem tempore voluptatibus!",
		price: "175.00"
	}
	return (
		<div>
			<ProductCard data={data}/>
		</div>
	)
}