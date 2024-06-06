import { useState } from "react";

interface data {
	id: number;
	title: string;
	price: number;
	images: string[];
	bedRooms: number;
	bathroom: number;
	size: number;
	latitude: number;
	longitude: number;
	city: string;
	address: string;
	school: string;
	bus: string;
	restaurant: string;
	description: string;
}

export const Slider: React.FC<{ data: data }> = ({ data }) => {
	const { images } = data;

	const [sliderImage, setSliderImage] = useState<number | null>(null);

	const changeImage = (direction: "left" | "right"): void => {
		if (direction === "left") {
			if (sliderImage === 0) {
				setSliderImage(images.length - 1);
			} else {
				setSliderImage((prev) => prev - 1);
			}
		}

		if (direction === "right") {
			if (sliderImage === images.length - 1) {
				setSliderImage(0);
			} else {
				setSliderImage((prev) => prev + 1);
			}
		}
	};

	return (
		<>
			{sliderImage !== null && (
				<div className="fixed top-0 left-0 flex flex-row center items-center justify-center bg-black/70 w-screen h-screen gap-4 p-16">
					<div className="flex items-center justify-center pr-6">
						<img
							onClick={() => changeImage("left")}
							className="left w-10"
							src="/arrow.png"
						/>
					</div>
					<div className="w-full h-full">
						<img
							className="w-full cursor-pointer h-full object-cover"
							src={images[sliderImage]}
						/>
					</div>
					<div className="flex items-center justify-center pl-6">
						<img
							onClick={() => changeImage("right")}
							className="right cursor-pointer rotate-180 w-10"
							src="/arrow.png"
						/>
						<div
							className="absolute top-16 right-28 text-2xl text-white cursor-pointer"
							onClick={() => setSliderImage(null)}>
							X
						</div>
					</div>
				</div>
			)}
			<div className="flex w-full h-[350px] gap-3">
				<div className="main-img flex-[3_1_0%] ">
					<img
						onClick={() => setSliderImage(0)}
						className="w-full h-full object-cover rounded-lg cursor-pointer"
						src={images[0]}></img>
				</div>
				<div className="secondary-imgs gap-3 flex flex-col flex-1 basis-0 ">
					{images.slice(1).map((img, index) => (
						<img
							className="cursor-pointer w-full h-full object-cover rounded-lg"
							src={img}
							key={index}
							onClick={() => setSliderImage(index + 1)}></img>
					))}
				</div>
			</div>
		</>
	);
};
