import { Link } from "react-router-dom";

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
	return (
		<div className="flex flex-row">
			<div className="left flex grow w-[40%]">
				<Link
					className="h-[200px] w-full hover:scale-[1.05]"
					to={`/${item.id}`}>
					<img
						className="w-full h-full object-cover rounded-md"
						src={item.img}></img>
				</Link>
			</div>
			<div className="ml-10 right w-[50%]">
				<div className="flex flex-col w-full h-full justify-between">
					<h2 className="text-lg font-semibold">{item.title}</h2>
					<div className="flex leading-3 items-center gap-1">
						<span className="">
							<img
								className="w-4 h-4"
								src="/pin.png"
								alt=""
							/>
						</span>
						{item.address}
					</div>
					<div>
						<span className="bg-yellow-300">£{item.price}</span>
					</div>
					<div className="flex justify-between">
						<div>
							<span>{item.bedroom}</span>
							<span>{item.bathroom}</span>
						</div>
						<div>
							<span>1</span>
							<span>2</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
