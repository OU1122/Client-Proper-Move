export default function Button({ onClick, children }: ButtonProps) {
	const handleMouseDown = () => {
		setInputType("text");
	};

	const handleMouseUp = () => {
		setInputType("password");
	};

	return <div></div>;
}
