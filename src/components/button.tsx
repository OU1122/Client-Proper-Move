type ButtonProps = {
	onClick?: () => void;
	children: React.ReactNode;
	disabled?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({ onClick, children, disabled }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			type="button"
			disabled={disabled}
			className="leading-loose px-2 py-1 bg-emerald-500 text-white hover:bg-emerald-600 ease-in transition-all rounded-lg">
			{children}
		</button>
	);
}
