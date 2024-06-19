type ButtonProps = {
	onClick: () => void;
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({ onClick, children }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			type="button"
			className="leading-loose px-2 py-1 bg-yellow-300 rounded-lg">
			{children}
		</button>
	);
}
