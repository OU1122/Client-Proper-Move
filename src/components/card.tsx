import { Link } from "react-router-dom";
import { numberFormatter } from "../lib/numberFormatter";

interface Item {
	id: number;
	title: string;
	images: string[];
	bedroom: number;
	bathroom: number;
	price: number;
	address: string;
	latitude: number;
	longitude: number;
}

export const Card: React.FC<{ post: Item }> = ({ post }) => {
	return (
		<div className="flex flex-col sm:flex-row gap-2">
			<div className="left flex grow w-full sm:w-[40%] shadow-lg shadow-zinc-100">
				<Link
					className="h-[200px] w-full hover:scale-[1.05] transition-all ease-in"
					to={`/${post.id}`}>
					<img
						className="w-full h-full object-cover rounded-md"
						src={
							post.images[0]
								? post.images[0]
								: "/Image_not_available.png"
						}></img>
				</Link>
			</div>
			<div className=" sm:ml-5 right w-full sm:w-[50%] ">
				<div className="flex flex-col w-full h-full justify-between gap-3 sm:gap-1">
					<Link to={`/${post.id}`}>
						<h2 className="text-lg font-semibold">{post.title}</h2>
					</Link>
					<div className="flex leading-3">
						<span className="text-slate-500 flex items-center flex-row gap-1">
							<img
								className="w-4 h-4"
								src="/pin.png"
								alt=""
							/>
							{post.address}
						</span>
					</div>
					<div>
						<span className="bg-emerald-100 rounded-md px-1 text-lg">
							{numberFormatter.format(post.price)}
						</span>
					</div>
					<div className="flex justify-between">
						<div className="flex flex-row gap-1 md:gap-4 flex-wrap">
							<div className="flex flex-row items-center bg-slate-100 rounded-md p-1  gap-1">
								<img
									className="w-4 h-4"
									src="/bed.png"
									alt="bedrooms"
								/>
								{post.bedroom} <span>Bedroom</span>
							</div>
							<div className="flex flex-row items-center bg-slate-100 rounded-md  p-1 gap-1">
								<img
									className="w-4 h-4"
									src="/bath.png"
									alt="bathrooms"></img>
								{post.bathroom} <span> Bathroom</span>
							</div>
						</div>
						<div className="flex items-center gap-2 flex-wrap">
							<span className="border border-slate-400  p-1 rounded-md cursor-pointer hover:bg-slate-100">
								<Link to={`/${post.id}`}>
									<img
										className="w-4 h-4 text-slate-100 "
										src="/save.png"></img>
								</Link>
							</span>

							<span className="border border-slate-400 p-1 rounded-md cursor-pointer hover:bg-slate-100">
								<Link to={`/${post.id}`}>
									<img
										className="w-4 h-4 text-slate-100 "
										src="/chat.png "></img>
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
