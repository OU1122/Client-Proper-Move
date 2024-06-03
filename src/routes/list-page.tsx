import Card from "../components/card.tsx";
import Filter from "../components/filter.tsx";
import { listData } from "../lib/list-data.tsx";

const ListPage: React.FC = () => {
	const data = listData;
	return (
		<div className="flex w-full">
			<div className="border-[1px] left w-[65%]">
				<Filter />

				<div className="wrapper flex flex-col pr-[10px] gap-10 overflow-y-scroll">
					{data.map((item) => (
						<Card
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
			<div className="border-[1px] right w-[35%]">
				<p>Map</p>
			</div>
		</div>
	);
};
export default ListPage;
