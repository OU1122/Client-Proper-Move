import React, { FC } from "react";

const SearchBox: FC = () => {
	return (
		<div>
			<div>
				<button>Buy</button>
				<button>Rent</button>
			</div>
			<form>
				<input
					type="text"
					name="location"
					placeholder="City Location"></input>
				<input
					type="number"
					name="minPrice"
					min={0}
					max={10000000}
					placeholder="Min Price"></input>
				<input
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
