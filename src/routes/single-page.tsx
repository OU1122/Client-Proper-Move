import { useLoaderData } from "react-router-dom";
import { Map } from "../components/map";
import { Slider } from "../components/slider";
import { singlePostData } from "../lib/list-data";

import DOMPurify from "dompurify";

const SinglePage: React.FC = () => {
	const data = singlePostData;

	const post = useLoaderData();

	return (
		<div className="flex w-full flex-col md:flex-row h-[calc(100%-96px)] px-5">
			<div className="left md:w-[65%] pr-2">
				<div className="flex">
					<Slider data={data} />
				</div>
				<div className="flex flex-row justify-between mt-10">
					<div className="flex flex-col justify-between gap-4">
						<h2 className="text-lg font-semibold">{post.address}</h2>
						<div className="flex flex-row items-center gap-1">
							<img
								className="w-4 h-4"
								src="/pin.png"
							/>
							<span className="text-slate-500">{post.address}</span>
						</div>
						<span className="bg-yellow-200 rounded-md px-1 text-lg w-fit">
							£ {post.price}
						</span>
					</div>

					<div className="flex items-center justify-center flex-col gap-1 ">
						<div className="p-3 flex items-center flex-col bg-yellow-100 rounded-lg">
							<img
								className="h-12 w-12 rounded-full object-cover"
								src={post.user.avatar}
							/>
							<span className="font-bold ">{post.user.username}</span>
						</div>
					</div>
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(post.postDetail.desc),
					}}></div>
			</div>
			<div className="right relative md:w-[35%] mt-7 md:mt-0 md:pl-8 flex flex-col gap-5 pb-10 ">
				<div className="absolute -top-2 -left-10 w-screen h-full md:hidden -z-50 bg-[#fcf5f3]"></div>
				<div>
					<div>
						<h2 className="text-lg font-bold mb-4">General</h2>
						<div className="utilities flex  flex-col gap-3 p-3 bg-white rounded-lg">
							<div className="flex flex-row items-center gap-3">
								<img
									className="w-6 h-6"
									src="/utility.png"></img>
								<div className="flex flex-col">
									<span className="font-bold">Utilities</span>
									{post.postDetail.utilities === "owner" ? (
										<span>Owner is responsible</span>
									) : (
										<span>Renter is responsible</span>
									)}
								</div>
							</div>

							<div className="flex flex-row items-center gap-3">
								<img
									src="/pet.png"
									className="w-6 h-6"></img>
								<div className="flex flex-col">
									<span className="font-bold">Pet Policy</span>
									{post.postDetail.pet === "allowed" ? (
										<span>Pets Allowed</span>
									) : (
										<span>Pets now allowed</span>
									)}
								</div>
							</div>

							<div className="flex flex-row items-center gap-3">
								<img
									src="/fee.png"
									className="w-6 h-6"></img>
								<div className="flex flex-col">
									<span className="font-bold">Property Fees</span>

									<span>{post.postDetail.income}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-lg font-bold mb-4 ">Room Sizes</h2>
					<div className="flex flex-row flex-wrap gap-3 lg:gap-4 justify-start">
						<div className="flex flex-row px-2 py-2 items-center gap-1 bg-white rounded-lg">
							<img
								className="w-6 h-6"
								src="/size.png"></img>
							<p>{post.postDetail.size}</p>
						</div>
						<div className="flex flex-row px-2 py-2 items-center gap-1  bg-white rounded-lg">
							<img
								className="w-6 h-6"
								src="/bed.png"></img>
							{post.bedroom === 1 ? (
								<p>{post.bedroom} bedroom</p>
							) : (
								<p>{post.bedroom} bedrooms</p>
							)}
						</div>
						<div className="flex flex-row px-2 py-2 items-center gap-1  bg-white rounded-lg">
							<img
								className="w-6 h-6"
								src="/bath.png"></img>
							{post.bathroom === 1 ? (
								<p>{post.bathroom} bathroom</p>
							) : (
								<p>{post.bathroom} bathrooms</p>
							)}
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-lg font-bold mb-4">Nearby Places</h2>
					<div className="flex-row flex flex-wrap justify-between items-center bg-white p-3 rounded-lg">
						<div className="flex flex-row items-center gap-2">
							<img
								className="h-6 w-6"
								src="/school.png"></img>
							<div className="flex flex-col">
								<h3 className="font-bold">School</h3>
								<p>{post.postDetail.school}m away</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-2">
							<img
								className="h-6 w-6"
								src="/bus.png"></img>
							<div className="flex flex-col">
								<h3 className="font-bold">Bus Stop</h3>
								<p>{post.postDetail.bus}m away</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-2">
							<img
								className="h-6 w-6"
								src="/restaurant.png"></img>
							<div className="flex flex-col">
								<h3 className="font-bold">Restaurants</h3>
								<p>{post.postDetail.restaurant}m away</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-lg font-bold mb-4">Location</h2>
					<div className="w-[96%] md:w-full h-[200px]">
						<Map items={[data]} />
					</div>
					<div className="flex justify-between mt-4">
						<button className="flex flex-row items-center p-2 gap-2 justify-center border bg-white rounded-lg">
							<img
								className="w-6 h-6"
								src="/chat.png"></img>
							<p className="">Send a Message</p>
						</button>
						<button className="flex flex-row items-center p-2 gap-2 justify-center border bg-white rounded-lg">
							<img
								className="w-6 h-6"
								src="/save.png"></img>
							<p>Save Listing</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SinglePage;
