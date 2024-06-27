import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

export default function BackButton(): ReactElement {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(-1)}
			type="button"
			className="leading-loose font-semibold  text-emerald-500 hover:underline hover:underline-offset-2 ease-in px-4 py-2  transition-all ">
			<div className="flex flex-row items-center justify-center gap-2">
				<IoIosArrowDropleft />
				<span className="">Go Back</span>
			</div>
		</button>
	);
}
