import { useState } from "react";

export const Slider: React.FC<{ data: string[] }> = ({ data }) => {
	const images = data;

	const [sliderImage, setSliderImage] = useState<number | null>(null);

	const changeImage = (direction: "left" | "right"): void => {
		if (sliderImage === null) {
			return;
		}

		setSliderImage((prev) => {
			if (prev === null) {
				return null;
			}

			if (direction === "left") {
				return prev === 0 ? images.length - 1 : prev - 1;
			} else if (direction === "right") {
				return prev === images.length - 1 ? 0 : prev + 1;
			}

			return prev;
		});
	};

	const handleClose = () => {
		setSliderImage(null);
	};
	return (
		<>
			{sliderImage !== null && (
				<div className="fixed top-0 left-0 flex flex-row  items-center justify-center bg-black/70 w-screen h-screen gap-4 py-16 md:p-16 z-50">
					<div className="flex items-center justify-center pr-1">
						<img
							onClick={() => changeImage("left")}
							className="left w-10"
							src="/arrow.png"
						/>
					</div>
					<div className=" relative w-full h-full">
						<img
							className=" w-full cursor-pointer h-full object-cover sm:object-contain "
							src={images[sliderImage]}></img>
					</div>
					<div className="flex items-center justify-center pl-1">
						<img
							onClick={() => changeImage("right")}
							className="right cursor-pointer rotate-180 w-10"
							src="/arrow.png"
						/>
						<div
							className="absolute top-16 right-[75px] text-4xl text-white cursor-pointer p-2 hover:bg-slate-800 rounded-lg transition-all ease-in"
							onClick={handleClose}>
							X
						</div>
					</div>
				</div>
			)}
			<div className="flex gap-2 p-2 items-stretch justify-center">
				<div className="main-img h-[314px] flex-[3_1_0%]">
					<img
						onClick={() => setSliderImage(0)}
						className="w-full h-full object-cover rounded-lg cursor-pointer"
						src={images[0]}></img>
				</div>
				<div className="secondary-imgs hidden md:flex gap-2 items-center justify-center flex-col  w-full flex-1">
					{images.slice(1, 3).map((img, index) => (
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
