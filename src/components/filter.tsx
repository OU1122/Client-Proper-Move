import { useState } from "react";
import { useSearchParams as useReactRouterSearchParams } from "react-router-dom";
import { SearchParams } from "../lib/types";

export const Filter: React.FC = () => {
	const [searchParams, setSearchParams] = useReactRouterSearchParams();

	const [query, setQuery] = useState<SearchParams>({
		type: searchParams.get("type") || "",
		city: searchParams.get("city") || "",
		property: searchParams.get("property") || "apartment",
		minPrice: searchParams.get("minPrice") || 0,
		maxPrice: searchParams.get("maxPrice") || 1000000,
		bedroom: searchParams.get("bedroom") || 1,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setQuery({ ...query, [name]: value });
	};

	const handleFilter = () => {
		const params = new URLSearchParams({
			type: query.type,
			city: query.city,
			property: query.property,
			minPrice: query.minPrice.toString(),
			maxPrice: query.maxPrice.toString(),
			bedroom: query.bedroom.toString(),
		});
		setSearchParams(params.toString());
	};

	return (
		<div className="my-4">
			<h1 className="text-xl">
				Search results{" "}
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
						className="w-full px-4 py-2 border bg-white rounded-md"
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
						className="w-full pl-4 py-2 border bg-white rounded-md"
						id="type"
						name="type"
						onChange={handleChange}
						defaultValue={query.type ?? ""}>
						<option
							value="buy"
							selected={searchParams.get("type") === "buy"}>
							Buy
						</option>
						<option
							value="rent"
							selected={searchParams.get("type") === "rent"}>
							Rent
						</option>
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
						className="w-full pl-4 py-2 border bg-white rounded-md"
						id="property"
						name="property"
						defaultValue={query.property ?? "apartment"}>
						<option value="apartment">Apartment</option>
						<option value="house">House</option>
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
						className="w-full pl-4 py-2 border bg-white rounded-md"
						type="number"
						name="minPrice"
						step="5000"
						min="0"
						max="10000000"
						placeholder="any"
						defaultValue={query.minPrice ?? 0}></input>
				</div>
				<div className="flex flex-col basis-1/5">
					<label
						htmlFor="maxPrice"
						className="text-sm">
						Max price
					</label>
					<input
						onChange={handleChange}
						className="w-full pl-4 py-2 border bg-white rounded-md"
						type="number"
						name="maxPrice"
						step="5000"
						min="0"
						max="10000000"
						placeholder="any"
						defaultValue={query.maxPrice ?? 10000000}></input>
				</div>
				<div className="flex flex-col basis-1/5">
					<label
						htmlFor="bedroom"
						className="text-sm">
						Bedrooms
					</label>
					<input
						onChange={handleChange}
						className="w-full pl-4 py-2 border bg-white rounded-md"
						type="number"
						id="bedroom"
						name="bedroom"
						min={0}
						max={10}
						placeholder="any"
						defaultValue={query.bedroom ?? 1}></input>
				</div>
				<div
					className="hover:cursor-pointer min-w-[48px] h-[48px] mt-4 flex flex-col md:self-end justify-center items-center bg-emerald-500 hover:bg-emerald-600 ease-in transition-all rounded-md "
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
