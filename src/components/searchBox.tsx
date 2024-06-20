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
		<div className="flex flex-col flex-wrap mt-10 ">
			<div>
				<button
					onClick={() => {
						switchType("buy");
					}}
					className={clsx("py-3 px-7 rounded-tl-md   border border-r-0 ", {
						"bg-emerald-500 text-white hover:bg-emerald-600 ease-in transition-all":
							query.type === "buy",
						"bg-white text-black": query.type === "rent",
					})}>
					Buy
				</button>
				<button
					onClick={() => {
						switchType("rent");
					}}
					className={clsx(
						"py-3 px-7 rounded-tr-md  border-b-0 border border-l-0",
						{
							"bg-emerald-500 text-white hover:bg-emerald-600 ease-in transition-all":
								query.type === "rent",
							"bg-white text-black": query.type === "buy",
						}
					)}>
					Rent
				</button>
			</div>
			<form className="relative bg-white flex flex-col gap-1 justify-start md:flex-row shadow-md  border-2 rounded-bl-md rounded-br-md rounded-tr-md ">
				<div className="opacity-20 blur-lg filter bg-emerald-500 absolute -inset-1 h-full w-full rounded-md -z-50"></div>
				<div className="relative flex flex-col gap-1 justify-start md:flex-row bg-white w-full">
					<input
						onChange={handleChange}
						className="border-r-0 border-b-2 sm:border-b-0 py-3 pl-7 w-2/4"
						type="text"
						name="city"
						placeholder={
							query.type === "buy"
								? "Where would you like to buy?"
								: "Where would you like to rent?"
						}></input>
					<input
						onChange={handleChange}
						className="border-r-0 border-b-2 sm:border-b-0  py-3 pl-7 w-1/4"
						type="number"
						name="minPrice"
						min={0}
						max={10000000}
						placeholder="Min Price"></input>
					<input
						onChange={handleChange}
						className=" py-3  pl-7 w-1/4 "
						type="number"
						name="maxPrice"
						min={0}
						max={10000000}
						placeholder="Max Price"></input>
					<Link
						to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
						<div className="flex w-full sm:min-w-[48px] sm:min-h-[48px] basis-1/4 justify-center items-center bg-emerald-500 hover:bg-emerald-600 ease-in transition-all rounded-md">
							<img
								className="p-2 rounded-md "
								src="/search.png"
								alt="search-button"></img>
						</div>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SearchBox;
