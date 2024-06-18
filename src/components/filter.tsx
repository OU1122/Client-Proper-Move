import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams("");

	const [query, setQuery] = useState({
		type: searchParams.get("type" || ""),
		city: searchParams.get("city" || ""),
		property: searchParams.get("property" || ""),
		minPrice: searchParams.get("minPrice" || 0),
		maxPrice: searchParams.get("maxPrice" || 1000000),
		bedroom: searchParams.get("bedroom" || 1),
	});

	const handleChange = (e) => {
		setQuery({ ...query, [e.target.name]: e.target.value });
	};

	const handleFilter = () => {
		setSearchParams(query);
	};

	return (
		<div className="my-8">
			<h1 className="text-xl">
				Search results for{" "}
				<span className="font-bold">{searchParams.get("city")}</span>
			</h1>
			<div className="top mt-4 pr-[10px]">
				<div>
					<label
						htmlFor="city"
						className="text-sm">
						City
					</label>
					<input
						className="w-full px-4 py-2 border bg-white"
						type="text"
						id="city"
						name="city"
						placeholder="City Location"
						onChange={handleChange}
						defaultValue={query.city ?? ""}></input>
				</div>
			</div>

			<div className="bottom mt-4 pr-[10px] flex-col flex md:flex-row gap--2 md:gap-4 md:items-center">
				<div className="flex flex-col basis-1/5">
					<label
						htmlFor="type"
						className="text-sm">
						Type
					</label>
					<select
						className="w-full pl-4 py-2 border bg-white"
						id="type"
						name="type"
						onChange={handleChange}
						defaultValue={query.type ?? ""}>
						<option value="any">any</option>
						<option value="buy">Buy</option>
						<option value="rent">Rent</option>
					</select>
				</div>
				<div className="flex flex-col basis-1/5">
					<label
						htmlFor="property"
						className="text-sm">
						Property
					</label>
					<select
						onChange={handleChange}
						className="w-full pl-4 py-2 border bg-white"
						id="property"
						name="property"
						defaultValue={query.property ?? ""}>
						<option value="any">any</option>
						<option value="Apartment">Apartment</option>
						<option value="House">House</option>
						<option value="Condo">Condo</option>
						<option value="Land">Land</option>
					</select>
				</div>
				<div className="flex flex-col basis-1/5">
					<label
						htmlFor="minPrice"
						className="text-sm">
						Min price
					</label>
					<input
						onChange={handleChange}
						className="w-full pl-4 py-2 border bg-white"
						type="number"
						name="minPrice"
						step="5000"
						min="0"
						max="10000000"
						placeholder="any"
						defaultValue={query.minPrice ?? ""}></input>
				</div>
				<div className="flex flex-col basis-1/5">
					<label
						htmlFor="maxPrice"
						className="text-sm">
						Max price
					</label>
					<input
						onChange={handleChange}
						className="w-full pl-4 py-2 border bg-white"
						type="number"
						name="maxPrice"
						step="5000"
						min="0"
						max="10000000"
						placeholder="any"
						defaultValue={query.maxPrice ?? ""}></input>
				</div>
				<div className="flex flex-col basis-1/5">
					<label
						htmlFor="bedroom"
						className="text-sm">
						Bedrooms
					</label>
					<input
						onChange={handleChange}
						className="w-full pl-4 py-2 border bg-white"
						type="number"
						id="bedroom"
						name="bedroom"
						min={0}
						max={10}
						placeholder="any"
						defaultValue={query.bedroom ?? ""}></input>
				</div>
				<div
					className="hover:cursor-pointer min-w-[48px] h-[48px] mt-4 flex flex-col md:self-end justify-center items-center bg-yellow-300"
					onClick={handleFilter}>
					<img
						className="w-[24px] h-[24px]"
						src="/search.png"></img>
				</div>
			</div>
		</div>
	);
};

export default Filter;
