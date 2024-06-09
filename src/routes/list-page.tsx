import Card from "../components/card.tsx";
import Filter from "../components/filter.tsx";
import { Map } from "../components/map.tsx";
import { listData } from "../lib/list-data.tsx";

const ListPage: React.FC = () => {
	const data = listData;
	return (
		<div className="flex flex-col md:flex-row w-full h-[calc(100%-96px)] pb-5">
			<div className="flex flex-col left w-full md:w-[65%] pr-2">
				<Filter />

				<div className="wrapper flex flex-col pr-[10px] gap-10 overflow-y-scroll pb-10">
					{data.map((item) => (
						<Card
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
			<div className="pl-2 right hidden sm:block sm:w-[35%] mt-8">
				<Map items={data} />
			</div>
		</div>
	);
};
export default ListPage;
