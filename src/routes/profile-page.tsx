import { listData, userData } from "../lib/list-data";
import Card from "../components/card";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../lib/apiRequest";

const ProfilePage: React.FC = () => {
	const data = listData;
	const user = userData;
	const navigate = useNavigate();
	const [chatIsOpen, setChatIsOpen] = useState<null | true>(null);

	const handleLogout = async () => {
		try {
			const res = await apiRequest.post("/auth/logout");
			localStorage.removeItem("userData");
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col md:flex-row full h-[calc(100%-96px)] pb-5">
			<div className="flex flex-col left w-full md:w-[65%] px-4 mb-7 md:mb-0">
				<div className="userInfo mb-5">
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center mb-3">
							<h2 className="text-xl ">User Information</h2>
							<Link
								className="leading-loose px-4 py-2 bg-yellow-300 rounded-lg"
								to="/">
								Update Profile
							</Link>
						</div>
						<div className="flex flex-row gap-3 py-1 items-center">
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
						<div>
							<button
								onClick={handleLogout}
								type="button"
								className="leading-loose px-2 py-1 bg-yellow-300 rounded-lg">
								Logout
							</button>
						</div>
					</div>
				</div>
				<div className="myList flex justify-between items-center mb-8 pb-4 border-b-2">
					<h2 className="text-xl  ">My List</h2>
					<Link
						className="leading-loose px-4 py-2 bg-yellow-300 rounded-lg"
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
			<div className="relative right w-full h-full md:w-[35%] sm:mt-0 pl:0 md:pl-6 pb-10 md:pb-6 pr-1">
				<div className="absolute -top-2 -left-10 w-screen h-full md:hidden -z-50 bg-[#fcf5f3]"></div>
				<h2 className="text-xl mb-4">Messages</h2>
				{/* MAP OVER MESSAGES + ADD ONCLICK EVENT */}
				<div className="messages flex flex-col gap-4 h-1/2  overflow-y-auto">
					<div
						onClick={() => setChatIsOpen(true)}
						className="flex flex-row items-center gap-3 px-2 py-4 bg-white rounded-lg cursor-pointer">
						<img
							className="w-8 h-8 rounded-full object-cover"
							src={user.img}></img>
						<span className="font-semibold">{user.name}</span>
						<p>Lorem ipsum dolor, sit amet ... </p>
					</div>
					<div className="flex flex-row items-center gap-3 px-2 py-4 bg-white rounded-lg">
						<img
							className="w-8 h-8 rounded-full object-cover"
							src={user.img}></img>
						<span className="font-semibold">{user.name}</span>
						<p>Lorem ipsum dolor, sit amet ... </p>
					</div>
					<div className="flex flex-row items-center gap-3 px-2 py-4 bg-white rounded-lg">
						<img
							className="w-8 h-8 rounded-full object-cover"
							src={user.img}></img>
						<span className="font-semibold">{user.name}</span>
						<p>Lorem ipsum dolor, sit amet ... </p>
					</div>
					<div className="flex flex-row items-center gap-3 px-2 py-4 bg-white rounded-lg">
						<img
							className="w-8 h-8 rounded-full object-cover"
							src={user.img}></img>
						<span className="font-semibold">{user.name}</span>
						<p>Lorem ipsum dolor, sit amet ... </p>
					</div>
					<div className="flex flex-row items-center gap-3 px-2 py-4 bg-white rounded-lg">
						<img
							className="w-8 h-8 rounded-full object-cover"
							src={user.img}></img>
						<span className="font-semibold">{user.name}</span>
						<p>Lorem ipsum dolor, sit amet ... </p>
					</div>
					<div className="flex flex-row items-center gap-3 px-2 py-4 bg-white rounded-lg">
						<img
							className="w-8 h-8 rounded-full object-cover"
							src={user.img}></img>
						<span className="font-semibold">{user.name}</span>
						<p>Lorem ipsum dolor, sit amet ... </p>
					</div>
				</div>
				{chatIsOpen && (
					<div className="chatbox h-[47%] flex-1 flex flex-col border-2 border-yellow-300 rounded-lg ">
						<div className="flex flex-row items-center justify-between w-full gap-3 px-2 py-2 bg-yellow-300 ">
							<div className="flex items-center gap-4">
								<img
									className="w-8 h-8 rounded-full object-cover"
									src={user.img}></img>
								<span className="font-semibold">{user.name}</span>
							</div>
							<div onClick={() => setChatIsOpen(null)}>
								<span className="text-xl font-semibold cursor-pointer">
									X
								</span>
							</div>
						</div>
						<div className="overflow-y-auto bg-white p-2 items-start flex flex-col">
							<div className="message">
								<p>Message</p>
								<span className="text-sm bg-yellow-200">
									2 hours ago
								</span>
							</div>
							<div className="message">
								<p>Message</p>
								<span className="text-sm bg-yellow-200">
									2 hours ago
								</span>
							</div>
							<div className="message">
								<p>Message</p>
								<span className="text-sm bg-yellow-200">
									2 hours ago
								</span>
							</div>
							<div className="message">
								<p>Message</p>
								<span className="text-sm bg-yellow-200">
									2 hours ago
								</span>
							</div>
							<div className="message">
								<p>Message</p>
								<span className="text-sm bg-yellow-200">
									2 hours ago
								</span>
							</div>
							<div className="message">
								<p>Message</p>
								<span className="text-sm bg-yellow-200">
									2 hours ago
								</span>
							</div>
							<div className="message">
								<p>Message</p>
								<span className="text-sm bg-yellow-200">
									2 hours ago
								</span>
							</div>
						</div>
						<div className="flex flex-row h-[60px] w-full">
							<textarea className=" resize-none h-full w-full border-t-yellow-300 border-t-2"></textarea>
							<button className="h-full bg-yellow-300 px-6">Send</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfilePage;
