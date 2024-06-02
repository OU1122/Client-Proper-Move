import React, { useState } from "react";
import clsx from "clsx";

const SearchBox: React.FC = () => {
	const [type, setType] = useState("Rent");

	const changeType = (value: "Buy" | "Rent") => {
		setType(value);
	};

	return (
		<div className="mt-10">
			<div>
				<button
					onClick={() => {
						changeType("Buy");
					}}
					className={clsx("py-3 px-7 rounded-tl-md   border border-r-0", {
						"bg-black text-white": type == "Buy",
						"bg-white text-black": type == "Rent",
					})}>
					Buy
				</button>
				<button
					onClick={() => {
						changeType("Rent");
					}}
					className={clsx(
						"py-3 px-7 rounded-tr-md  border-b-0 border border-l-0 ",
						{
							"bg-black text-white": type == "Rent",
							"bg-white text-black": type == "Buy",
						}
					)}>
					Rent
				</button>
			</div>
			<form className="flex border rounded-bl-md">
				<input
					className="border-r-0  py-3 pl-7"
					type="text"
					name="location"
					placeholder="City Location"></input>
				<input
					className="border-r-0  py-3"
					type="number"
					name="minPrice"
					min={0}
					max={10000000}
					placeholder="Min Price"></input>
				<input
					className=" py-3"
					type="number"
					name="maxPrice"
					min={0}
					max={10000000}
					placeholder="Max Price"></input>
				<img
					src="/search.png"
					alt="search-button"></img>
			</form>
		</div>
	);
};

export default SearchBox;
