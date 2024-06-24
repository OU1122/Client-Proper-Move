type ShapedImageProps = {
	imgUrl: string;
	size?: "normal" | "big";
};

const sizeClasses = {
	normal: "h-40 w-40 md:h-40 md:w-40",
	big: "h-40 w-40 md:h-64 md:w-64",
};

export default function ShapedImage({ imgUrl, size }: ShapedImageProps) {
	const selectedSizeClass = sizeClasses[size] || sizeClasses["normal"];
	return (
		<div
			className={`bg-white rounded-full overflow-hidden shadow-xl border-4 border-white ${selectedSizeClass}`}>
			<img
				className="w-full h-full object-cover opacity-90"
				src={imgUrl}></img>
		</div>
	);
}
