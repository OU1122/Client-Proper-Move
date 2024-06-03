interface Item {
	id: number;
	title: string;
	img: string;
	bedroom: number;
	bathroom: number;
	price: number;
	address: string;
	latitude: number;
	longitude: number;
}

export const Card: React.FC<{ item: Item }> = ({ item }) => {
	return <div>{item.title}</div>;
};

export default Card;
