import { Marker, Popup } from "react-leaflet";
import { numberFormatter } from "../lib/numberFormatter";

interface Item {
	id: number;
	title: string;
	images?: string[];
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
						{item.images && (
							<img
								className="w-[64px] h-[48[px]] object-cover"
								src={item.images[0]}></img>
						)}

						<div className="flex flex-col justify-between">
							<span className="inline-block font-semibold">
								{item.title}
							</span>
							<span>
								{item.bedroom === 1 ? (
									<span>{item.bedroom} bedroom</span>
								) : (
									<span>{item.bedroom} bedrooms</span>
								)}
							</span>
							<span>{numberFormatter.format(item.price)}</span>
						</div>
					</div>
				</Popup>
			}
		</Marker>
	);
};
