import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "./map-pin";
import { MapItem } from "../lib/types";

export const Map: React.FC<{ items: MapItem[] }> = ({ items }) => {
	const convertedLatitude = parseFloat(items[0].latitude);
	const convertedLongitude = parseFloat(items[0].longitude);

	return (
		<MapContainer
			center={
				items.length === 1
					? [convertedLatitude, convertedLongitude]
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
