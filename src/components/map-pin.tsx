import { Marker, Popup } from "react-leaflet";

interface Item {
	id: number;
	title: string;
	img?: string;
	bedroom?: number;
	bathroom: number;
	price: number;
	address: string;
	latitude: number;
	longitude: number;
}

export const MapPin: React.FC<{ item: Item }> = ({ item }) => {
	return (
		<Marker position={[item.latitude, item.longitude]}>
			{
				<Popup>
					<div className="flex flex-row gap-5 w-fit">
						{item.img && (
							<img
								className="w-[64px] h-[48[px]] object-cover"
								src={item.img}></img>
						)}

						<div className="flex flex-col justify-between">
							<span className="inline-block font-semibold">
								{item.title}
							</span>
							<span>{item.bedroom}</span>
							<span>${item.price}</span>
						</div>
					</div>
				</Popup>
			}
		</Marker>
	);
};
