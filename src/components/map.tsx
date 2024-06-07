import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "./map-pin";

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

export const Map: React.FC<{ items: Item[] }> = ({ items }) => {
	return (
		<MapContainer
			center={[52.479, -1.9026]}
			zoom={7}
			scrollWheelZoom={false}
			className="map">
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
