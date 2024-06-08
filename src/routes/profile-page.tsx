import { listData, userData } from "../lib/list-data";
import Card from "../components/card";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
	const data = listData;
	const user = userData;
	return (
		<div className="flex w-full h-[calc(100%-96px)] pb-5">
			<div className="flex flex-col left w-[65%] px-4">
				<div className="userInfo mb-5">
					<div className="flex flex-col gap-1">
						<div className="flex justify-between items-center mb-3">
							<h2 className="text-xl ">User Information</h2>
							<Link
								className="leading-loose px-4 py-2 bg-yellow-400 rounded-lg"
								to="/">
								Update Profile
							</Link>
						</div>
						<div className="flex flex-row gap-2 py-1 items-center">
							<h2 className="text-sm">Avatar:</h2>
							<img
								className="w-8 h-8 rounded-full object-cover"
								src={user.img}></img>
						</div>
						<div className="flex flex-row gap-2 py-1 ">
							<h2 className="text-sm">Username:</h2>
							<span className="font-semibold text-sm">{user.name}</span>
						</div>
						<div className="flex flex-row gap-2 py-1">
							<h2 className="text-sm">E-mail:</h2>
							<span className="font-semibold text-sm">
								test@gmail.com
							</span>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center mb-8 pb-4 border-b-2">
					<h2 className="text-xl  ">My List</h2>
					<Link
						className="leading-loose px-4 py-2 bg-yellow-400 rounded-lg"
						to="/">
						Add New Listing
					</Link>
				</div>
				<div className="wrapper flex flex-col pr-[10px] gap-10 overflow-y-scroll ">
					{data.map((item) => (
						<Card
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
			<div className="pl-2 right w-[35%] mt-8">
				<h2>Hi</h2>
			</div>
		</div>
	);
};

export default ProfilePage;
