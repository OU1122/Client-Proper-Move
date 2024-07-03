import { useLoaderData } from "react-router-dom";
import Card from "../components/card.tsx";
import Filter from "../components/filter.tsx";
import { Map } from "../components/map.tsx";
import { Post } from "../lib/types.ts";

const ListPage: React.FC = () => {
	const posts = useLoaderData() as Post[];

	return (
		<div className="flex flex-col md:flex-row w-full h-[calc(100%-96px)] pb-5">
			<div className="flex flex-col left w-full md:w-[65%] pr-2">
				<Filter />

				<div className="wrapper flex flex-col pr-[10px] gap-10 overflow-y-scroll pb-10">
					{posts && posts.length > 0 ? (
						posts.map((item) => (
							<Card
								key={item.id}
								post={item}
							/>
						))
					) : (
						<h2>No properties found, try searching again!</h2>
					)}
				</div>
			</div>
			<div className="pl-2 right hidden sm:block sm:w-[35%] mt-8">
				{posts && posts.length > 0 && <Map items={posts} />}
			</div>
		</div>
	);
};
export default ListPage;
