import { Marker, Popup } from "react-leaflet";
import { numberFormatter } from "../lib/numberFormatter";
import { MapItem } from "../lib/types";
import { Link } from "react-router-dom";

export const MapPin: React.FC<{ item: MapItem }> = ({ item }) => {
	const latitude = parseFloat(item.latitude);
	const longitude = parseFloat(item.longitude);
	return (
		<Marker position={[latitude, longitude]}>
			{
				<Popup>
					<div className="flex flex-row gap-5 w-fit">
						<Link to={`/${item.id}`}>
							{" "}
							{item.images && (
								<img
									className="w-[60px] h-[60px] object-cover"
									src={item.images[0]}></img>
							)}
						</Link>

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
