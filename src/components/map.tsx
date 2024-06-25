import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "./map-pin";

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

export const Map: React.FC<{ items: Item[] }> = ({ items }) => {
	console.log(items);
	return (
		<MapContainer
			center={
				items.length === 1
					? [items[0].latitude, items[0].longitude]
					: [51.509113, -0.15419]
			}
			zoom={9}
			scrollWheelZoom={false}
			className="map z-0">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{items.map((item) => (
				<MapPin
					key={item.id}
					item={item}
				/>
			))}
		</MapContainer>
	);
};
