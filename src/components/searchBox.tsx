import React, { ReactElement, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const SearchBox: React.FC = () => {
	const [query, setQuery] = useState({
		type: "buy",
		city: "",
		minPrice: 0,
		maxPrice: 0,
	});

	const handleChange = (e) => {
		setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const switchType = (value: string) => {
		setQuery((prev) => ({ ...prev, type: value }));
	};

	return (
		<div className="flex flex-col flex-wrap mt-10">
			<div>
				<button
					onClick={() => {
						switchType("buy");
					}}
					className={clsx("py-3 px-7 rounded-tl-md   border border-r-0", {
						"bg-black text-white": query.type == "buy",
						"bg-white text-black": query.type == "rent",
					})}>
					Buy
				</button>
				<button
					onClick={() => {
						switchType("Rent");
					}}
					className={clsx(
						"py-3 px-7 rounded-tr-md  border-b-0 border border-l-0 ",
						{
							"bg-black text-white": query.type == "rent",
							"bg-white text-black": query.type == "buy",
						}
					)}>
					Rent
				</button>
			</div>
			<form className="bg-white flex flex-col gap-1 justify-start md:flex-row  border-2 rounded-bl-md rounded-br-md rounded-tr-md ">
				<input
					onChange={handleChange}
					className="border-r-0 border-b-2 sm:border-b-0 py-3 pl-7 w-full"
					type="text"
					name="city"
					placeholder="City"></input>
				<input
					onChange={handleChange}
					className="border-r-0 border-b-2 sm:border-b-0  py-3 pl-7 w-full"
					type="number"
					name="minPrice"
					min={0}
					max={10000000}
					placeholder="Min Price"></input>
				<input
					onChange={handleChange}
					className=" py-3  pl-7 w-full "
					type="number"
					name="maxPrice"
					min={0}
					max={10000000}
					placeholder="Max Price"></input>
				<Link
					to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
					<div className="flex w-full sm:min-w-[48px] sm:min-h-[48px] basis-1/4 justify-center items-center bg-yellow-300">
						<img
							className="p-2 rounded-md "
							src="/search.png"
							alt="search-button"></img>
					</div>
				</Link>
			</form>
		</div>
	);
};

export default SearchBox;
