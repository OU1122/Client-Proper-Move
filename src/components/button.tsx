import { Link } from "react-router-dom";

type ButtonProps = {
	onClick?: () => void;
	children: React.ReactNode;
	disabled?: boolean;
	to?: string;
	images?: string[];
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
	onClick,
	children,
	disabled,
	type,
	to,
	images,
}: ButtonProps) {
	if (to) {
		return (
			<Link
				to={to}
				className="leading-loose  bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md ease-in px-4 min-w-fit py-2  transition-all rounded-lg">
				{children}
			</Link>
		);
	}

	if (images) {
		return (
			<button
				onClick={onClick}
				type={type}
				disabled={disabled}
				className={`leading-loose  bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md ease-in px-4 py-2  transition-all rounded-lg ${
					images.length < 1 ? "bg-gray-300 cursor-not-allowed" : ""
				} `}>
				{children}
			</button>
		);
	}
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className="leading-loose  bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md ease-in px-4 py-2  transition-all rounded-lg">
			{children}
		</button>
	);
}
