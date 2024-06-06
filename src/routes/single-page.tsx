import { Slider } from "../components/slider";
import { singlePostData } from "../lib/list-data";
import { userData } from "../lib/list-data";

const SinglePage: React.FC = () => {
	const data = singlePostData;

	return (
		<div className="flex w-full h-[calc(100%-96px)] px-5">
			<div className="left w-[65%] pr-2">
				<div className="flex">
					<Slider data={data} />
				</div>
				<div className="flex flex-row justify-between mt-10">
					<div className="flex flex-col justify-between gap-4">
						<h2 className="text-lg font-semibold">{data.title}</h2>
						<div className="flex flex-row items-center gap-1">
							<img
								className="w-4 h-4"
								src="/pin.png"
							/>
							<span className="text-slate-500">{data.address}</span>
						</div>
						<span className="bg-yellow-200 rounded-md px-1 text-lg w-fit">
							£ {data.price}
						</span>
					</div>

					<div className="flex items-center justify-center flex-col gap-1 ">
						<div className="p-3 flex items-center flex-col bg-yellow-100 rounded-lg">
							<img
								className="h-12 w-12 rounded-full object-cover"
								src={userData.img}
							/>
							<span className="font-bold ">{userData.name}</span>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<p>{data.description}</p>
				</div>
			</div>
			<div className="right w-[35%] pl-3">
				<div>
					<div>
						<span>General</span>
						<div className="utilities">
							<img src="/utility.png"></img>
							<div>
								<span>Utilities</span>
								<span>Renter is responsible</span>
							</div>
							<div>
								<img src="/utility.png"></img>
								<div>
									<span>Pet Policy</span>
									<span>Pets Allowed</span>
								</div>
								<div>
									<img src="/utility.png"></img>
									<div>
										<span>Property Fees</span>
										<span>
											Must be able to pay 3 times the monthly rent as
											a deposit.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<span>Room Sizes</span>
						<div>
							<div>1</div>
							<div>2</div>
							<div>3</div>
						</div>
					</div>
					<div>
						<span>Nearby Places</span>
						<div>
							<div>1</div>
							<div>2</div>
							<div>3</div>
						</div>
					</div>
					<div>Location</div>
					<div>
						<button>1</button>
						<button>2</button>
					</div>
				</div>
			</div>
		</div>
	);
};
